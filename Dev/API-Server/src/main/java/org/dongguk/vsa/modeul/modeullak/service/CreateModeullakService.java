package org.dongguk.vsa.modeul.modeullak.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.HttpCommonException;
import org.dongguk.vsa.modeul.core.scheduler.UpdaterScheduler;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakTag;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.modeullak.dto.request.CreateModeullakRequestDto;
import org.dongguk.vsa.modeul.modeullak.dto.response.CreateModeullakResponseDto;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakTagRepository;
import org.dongguk.vsa.modeul.modeullak.usecase.CreateModeullakUseCase;
import org.dongguk.vsa.modeul.tag.domain.mysql.Tag;
import org.dongguk.vsa.modeul.tag.repository.mysql.TagRepository;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.domain.type.EModeullakRole;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class CreateModeullakService implements CreateModeullakUseCase {

    private final ModeullakRepository modeullakRepository;
    private final ModeullakTagRepository modeullakTagRepository;

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final TagRepository tagRepository;

    private final UpdaterScheduler updaterScheduler;

    @Override
    @Transactional
    public CreateModeullakResponseDto execute(
            UUID accountId,
            CreateModeullakRequestDto requestDto
    ) {
        // 1. 현재 들어가있는 모들락이 있는지 확인
        if (isExistCurrentModeullak(accountId)) {
            throw new HttpCommonException(ErrorCode.EXISTING_RESOURCE);
        }

        // 2. String에서 Tag로 변환
        List<Tag> tags = convertStringsToTags(requestDto.tags());

        // 3. 모들락 생성 및 저장
        LocalDateTime startedAt = LocalDateTime.now();
        LocalDateTime endedAt = startedAt.plusHours(requestDto.hour()).plusMinutes(requestDto.minute());
        String participationCode = generateParticipationCode();

        Modeullak modeullak = Modeullak.builder()
                .title(requestDto.title())
                .participationCode(participationCode)
                .startedAt(startedAt)
                .endedAt(endedAt)
                .build();

        modeullakRepository.save(modeullak);

        // 4. 모들락 태그 생성 및 저장
        List<ModeullakTag> modeullakTags = tags.stream()
                .map(tag -> ModeullakTag.builder()
                        .modeullak(modeullak)
                        .tag(tag)
                        .build()
                )
                .toList();

        modeullakTagRepository.saveAll(modeullakTags);

        // 5. 모들락 권한 생성 및 저장
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new HttpCommonException(ErrorCode.NOT_FOUND_USER));

        UserModeullak userModeullak = UserModeullak.builder()
                .modeullakRole(EModeullakRole.HOST)
                .user(user)
                .modeullak(modeullak)
                .build();

        userModeullakRepository.save(userModeullak);

        // 6. Scheduler 등록
        updaterScheduler.addModeullakTask(
                modeullak.getId(),
                () -> {
                    modeullak.updateStatus(EModeullakStatus.ENDED);
                    modeullakRepository.save(modeullak);
                    },
                endedAt.atZone(ZoneId.systemDefault()).toInstant()
        );

        // 7. 반환
        return CreateModeullakResponseDto.fromEntity(modeullak, tags);
    }

    private Boolean isExistCurrentModeullak(UUID accountId) {
        return modeullakRepository.findCurrentModeullakByAccountIdAndStatusAndCurrentAtContentBetween(
                accountId,
                EModeullakStatus.STARTED,
                LocalDateTime.now()
        ).isPresent();
    }

    private List<Tag> convertStringsToTags(List<String> tagNames) {
        List<Tag> existedTags = tagRepository.findAllByNameIn(tagNames);
        List<Tag> notExistedTags = tagNames.stream()
                .filter(tagName -> existedTags.stream().noneMatch(existedTag -> existedTag.getName().equals(tagName)))
                .map(Tag::new)
                .toList();

        tagRepository.saveAll(notExistedTags);

        return Stream.of(existedTags, notExistedTags)
                .flatMap(List::stream)
                .toList();
    }

    private String generateParticipationCode() {
        String uuidStr = UUID.randomUUID().toString().replace("-", "");

        byte[] uuidBytes = uuidStr.getBytes(StandardCharsets.UTF_8);
        byte[] hashBytes;

        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            hashBytes = digest.digest(uuidBytes);
        } catch (NoSuchAlgorithmException e) {
            throw new HttpCommonException(ErrorCode.INTERNAL_SERVER_ERROR);
        }

        StringBuilder hashStr = new StringBuilder();

        for (int i = 0; i < 5; i++) {
            hashStr.append(Integer.toHexString(0xff & hashBytes[i]));
        }

        return hashStr.toString().toUpperCase();
    }
}
