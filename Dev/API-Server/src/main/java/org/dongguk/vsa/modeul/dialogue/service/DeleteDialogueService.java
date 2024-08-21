package org.dongguk.vsa.modeul.dialogue.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.dialogue.repository.mysql.DialogueRepository;
import org.dongguk.vsa.modeul.dialogue.usecase.DeleteDialogueUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DeleteDialogueService implements DeleteDialogueUseCase {
    private final DialogueRepository dialogueRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public void execute(Long dialogueId, UUID accountId) {
        // 1. 대화 및 사용자 정보 조회
        Dialogue dialogue = dialogueRepository.findById(dialogueId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 대화 소유자 확인
        if (!dialogue.getUser().getId().equals(user.getId())) {
            throw new CommonException(ErrorCode.ACCESS_DENIED);
        }

        // 3. 대화 삭제
        dialogueRepository.delete(dialogue);
    }
}
