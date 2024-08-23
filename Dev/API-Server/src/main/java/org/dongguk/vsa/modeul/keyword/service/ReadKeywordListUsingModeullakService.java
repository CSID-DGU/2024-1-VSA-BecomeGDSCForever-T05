package org.dongguk.vsa.modeul.keyword.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.dialogue.repository.mysql.DialogueRepository;
import org.dongguk.vsa.modeul.keyword.domain.mysql.Keyword;
import org.dongguk.vsa.modeul.keyword.dto.response.ModeullakKeywordDetailPagingDto;
import org.dongguk.vsa.modeul.keyword.usecase.ReadKeywordListUsingModeullakUseCase;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakKeyword;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakKeywordRepository;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReadKeywordListUsingModeullakService implements ReadKeywordListUsingModeullakUseCase {

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final ModeullakRepository modeullakRepository;
    private final ModeullakKeywordRepository modeullakKeywordRepository;

    private final DialogueRepository dialogueRepository;

    @Override
    public ModeullakKeywordDetailPagingDto execute(
            UUID accountId,
            Long modeullakId,
            Integer page,
            Integer size
    ) {
        // 1. 사용자 및 자원 조회
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Modeullak modeullak = modeullakRepository.findById(modeullakId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 권한 확인
        if (isNotHadRole(user, modeullak)) {
            throw new CommonException(ErrorCode.ACCESS_DENIED);
        }

        // 3. 키워드 조회
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<ModeullakKeyword> modeullakKeywords = modeullakKeywordRepository.findWithKeywordByModeullak(
                modeullak,
                pageable
        );

        // 4. 추가 데이터 조회
        List<Keyword> keywords = modeullakKeywords.getContent().stream()
                .map(ModeullakKeyword::getKeyword)
                .toList();

        List<Dialogue> dialogues = dialogueRepository.findAllWithKeywordAllByKeywordInAndModeullak(keywords, modeullak);

        // 5. 데이터 정제
        Map<Long, String> descriptionMap = modeullakKeywords.getContent().stream()
                .collect(Collectors.toMap(
                        modeullakKeyword -> modeullakKeyword.getKeyword().getId(),
                        ModeullakKeyword::getDescription
                ));

        Map<Long, Integer> similarQuestionCountMap = dialogues.stream()
                .collect(Collectors.groupingBy(
                        dialogue -> dialogue.getKeyword().getId(),
                        Collectors.collectingAndThen(Collectors.counting(), Long::intValue)
                ));

        Map<Long, List<Long>> representativeDialogueIdsMap = dialogues.stream()
                .collect(Collectors.toMap(
                        dialogue -> dialogue.getKeyword().getId(),
                        dialogue -> new ArrayList<>(List.of(dialogue.getId())),
                        (existingList, newList) -> {
                            existingList.addAll(newList);
                            return existingList;
                        }
                ));

        return ModeullakKeywordDetailPagingDto.fromEntities(
                modeullakKeywords,
                descriptionMap,
                similarQuestionCountMap,
                representativeDialogueIdsMap
        );
    }

    private Boolean isNotHadRole(User user, Modeullak modeullak) {
        return userModeullakRepository.findByUserAndModeullak(user, modeullak)
                .isEmpty();
    }
}
