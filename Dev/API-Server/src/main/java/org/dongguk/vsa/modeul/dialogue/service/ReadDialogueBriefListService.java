package org.dongguk.vsa.modeul.dialogue.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.dialogue.domain.type.EDialogueStatus;
import org.dongguk.vsa.modeul.dialogue.dto.response.DialogueBriefListDto;
import org.dongguk.vsa.modeul.dialogue.repository.mysql.DialogueRepository;
import org.dongguk.vsa.modeul.dialogue.usecase.ReadDialogueBriefListUseCase;
import org.dongguk.vsa.modeul.keyword.domain.mysql.Keyword;
import org.dongguk.vsa.modeul.keyword.repository.mysql.KeywordRepository;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReadDialogueBriefListService implements ReadDialogueBriefListUseCase {

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final ModeullakRepository modeullakRepository;

    private final KeywordRepository keywordRepository;

    private final DialogueRepository dialogueRepository;

    @Override
    public DialogueBriefListDto execute(
            UUID accountId,
            Long keywordId,
            Long modeullakId
    ) {
        // 1. 사용자 및 자원 조회
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Modeullak modeullak = modeullakRepository.findById(modeullakId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));
        Keyword keyword = keywordRepository.findById(keywordId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 사용자 권한 확인
        userModeullakRepository.findByUserAndModeullak(user, modeullak)
                .orElseThrow(() -> new CommonException(ErrorCode.ACCESS_DENIED));

        // 3. 대화 간략 정보 조회
        List<Dialogue> dialogues = dialogueRepository.findAllByKeywordAndModeullakAndStatus(
                keyword,
                modeullak,
                EDialogueStatus.COMPLETED
        );

        return DialogueBriefListDto.fromEntities(dialogues);
    }
}
