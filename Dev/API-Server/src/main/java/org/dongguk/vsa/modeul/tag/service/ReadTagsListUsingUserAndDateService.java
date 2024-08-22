package org.dongguk.vsa.modeul.tag.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.core.utility.DateTimeUtil;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.tag.domain.mysql.Tag;
import org.dongguk.vsa.modeul.tag.dto.response.TagsWithDateListDto;
import org.dongguk.vsa.modeul.tag.repository.mysql.TagRepository;
import org.dongguk.vsa.modeul.tag.usecase.ReadTagsListUsingUserAndDateUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class ReadTagsListUsingUserAndDateService implements ReadTagsListUsingUserAndDateUseCase {

    private final UserRepository userRepository;
    private final ModeullakRepository modeullakRepository;

    private final TagRepository tagRepository;

    @Override
    public TagsWithDateListDto execute(
            UUID accountId,
            String startedAtStr,
            String endedAtStr
    ) {
        // 1. 사용자 조회
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));

        // 2. 자원 조회
        LocalDateTime startedAt = DateTimeUtil.convertStringToLocalDate(startedAtStr).atStartOfDay();
        LocalDateTime endedAt = DateTimeUtil.convertStringToLocalDate(endedAtStr).atTime(23, 59, 59);

        List<Modeullak> modeullaks = modeullakRepository.findAllByUserAndStatusAndStartedAtBetween(
                user,
                EModeullakStatus.LLM_ENDED,
                startedAt,
                endedAt
        );

        // 2. 태그 조회
        List<Tag> tags = tagRepository.findAllByModeullaks(modeullaks);


        // 시작날짜부터 종료날짜 사이에 해당하는 String, List를 뽑는데 tags를 이용함
        List<TagsWithDateListDto.TagsWithDateDto> tagsWithDateDtoList = new ArrayList<>();

        startedAt.toLocalDate().datesUntil(endedAt.toLocalDate().plusDays(1))
                .forEach(date ->
                        {
                            List<String> tagNames = new ArrayList<>();

                            // tag, modeullakTag, modeullak은 1:N, N:1 관계임
                            List<Tag> todayTags = tags.stream()
                                    .filter(tag -> tag.getModeullaks().stream()
                                            .anyMatch(modeullak -> modeullak.getModeullak().getStartedAt().toLocalDate().equals(date)))
                                    .toList();

                            todayTags.stream()
                                    .limit(3)
                                    .forEach(tag -> tagNames.add(tag.getName()));

                            tagsWithDateDtoList.add(
                                    TagsWithDateListDto.TagsWithDateDto.builder()
                                            .date(DateTimeUtil.convertLocalDateToString(date))
                                            .tags(tagNames)
                                            .build()
                            );
                        }
                );

        return TagsWithDateListDto.builder()
                .tagsWithDateList(tagsWithDateDtoList)
                .build();
    }
}
