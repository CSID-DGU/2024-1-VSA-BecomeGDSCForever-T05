package org.dongguk.vsa.modeul.modeullak.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakRole;
import org.dongguk.vsa.modeul.modeullak.dto.request.CreateModeullakUserRequestDto;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.modeullak.usecase.CreateModeullakUserUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CreateModeullakUserService implements CreateModeullakUserUseCase {

    private final UserRepository userRepository;
    private final ModeullakRepository modeullakRepository;
    private final UserModeullakRepository userModeullakRepository;

    @Override
    public void execute(UUID accountId, CreateModeullakUserRequestDto requestDto) {
        // 1. 사용자 및 모들락 정보 조회
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Modeullak modeullak = modeullakRepository.findById(requestDto.modeullakId())
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 참여 코드 확인 및 중복 확인
        if (!modeullak.getParticipationCode().equals(requestDto.participationCode())) {
            throw new CommonException(ErrorCode.INVALID_PARTICIPATION_CODE);
        }

        if (isDuplicatedResource(user, modeullak)) {
            throw new CommonException(ErrorCode.DUPLICATED_RESOURCE);
        }

        // 3. UserModeullak 생성 및 저장
        UserModeullak userModeullak = UserModeullak.builder()
                .modeullakRole(EModeullakRole.PARTICIPANT)
                .user(user)
                .modeullak(modeullak)
                .build();

        userModeullakRepository.save(userModeullak);
    }

    private Boolean isDuplicatedResource(User user, Modeullak modeullak) {
        return userModeullakRepository.findByUserAndModeullak(user, modeullak).isPresent();
    }
}
