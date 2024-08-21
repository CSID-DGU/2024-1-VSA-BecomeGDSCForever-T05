package org.dongguk.vsa.modeul.dialogue.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.dialogue.domain.type.EDialogueStatus;
import org.dongguk.vsa.modeul.dialogue.dto.response.DialogueDetailResponseDto;
import org.dongguk.vsa.modeul.dialogue.repository.mysql.DialogueRepository;
import org.dongguk.vsa.modeul.dialogue.usecase.ReadDialogueDetailUseCase;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReadDialogueDetailService implements ReadDialogueDetailUseCase {

    private final DialogueRepository dialogueRepository;

    @Override
    public DialogueDetailResponseDto execute(Long dialogueId) {
        // 1. 대화 조회
        Dialogue dialogue = dialogueRepository.findById(dialogueId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. Pending 상태인 대화는 조회 불가
        if (dialogue.getStatus() == EDialogueStatus.PENDING) {
            throw new CommonException(ErrorCode.PENDING_DIALOGUE_LOCKED);
        }

        return DialogueDetailResponseDto.fromEntity(dialogue);
    }
}
