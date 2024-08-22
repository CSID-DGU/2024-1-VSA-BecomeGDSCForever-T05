package org.dongguk.vsa.modeul.dialogue.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.dialogue.domain.type.EDialogueStatus;
import org.dongguk.vsa.modeul.dialogue.dto.response.DialogueSummaryListDto;
import org.dongguk.vsa.modeul.dialogue.repository.mysql.DialogueRepository;
import org.dongguk.vsa.modeul.dialogue.usecase.ReadDialogueTemporarySummaryListUseCase;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReadDialogueTemporarySummaryListService implements ReadDialogueTemporarySummaryListUseCase {

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final ModeullakRepository modeullakRepository;

    private final DialogueRepository dialogueRepository;

    @Override
    public DialogueSummaryListDto execute(UUID accountId, Long modeullakId) {
        // 1. 사용자 및 자원 조회
        User requestUser = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Modeullak modeullak = modeullakRepository.findById(modeullakId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 사용자 권한 확인
        userModeullakRepository.findByUserAndModeullak(requestUser, modeullak)
                .orElseThrow(() -> new CommonException(ErrorCode.ACCESS_DENIED));

        // 3. 대화 조회
        List<Dialogue> dialogues = dialogueRepository.findAllByModeullakAndStatusNot(
                modeullak,
                EDialogueStatus.PENDING
        );

        // 4. 대화 간략 정보 DTO로 변환
        return DialogueSummaryListDto.fromEntities(dialogues);
    }

    @Override
    public DialogueSummaryListDto execute(UUID accountId, UUID userId, Long modeullakId) {
        // 1. 사용자 및 자원 조회
        User requestUser = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        User targetUser = userRepository.findById(userId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Modeullak modeullak = modeullakRepository.findById(modeullakId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 요청한 사용자의 권한 확인
        userModeullakRepository.findByUserAndModeullak(requestUser, modeullak)
                .orElseThrow(() -> new CommonException(ErrorCode.ACCESS_DENIED));

        // 3. 대상 사용자의 권한 확인
        userModeullakRepository.findByUserAndModeullak(targetUser, modeullak)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));

        // 4. 대화 조회
        List<Dialogue> dialogues = dialogueRepository.findAllByUserAndModeullakAndStatusNot(
                targetUser,
                modeullak,
                EDialogueStatus.PENDING
        );

        return DialogueSummaryListDto.fromEntities(dialogues);
    }
}
