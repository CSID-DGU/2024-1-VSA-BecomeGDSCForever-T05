package org.dongguk.vsa.modeul.dialogue.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.dialogue.dto.request.UpdateDialogueAnswerRequestDto;
import org.dongguk.vsa.modeul.dialogue.repository.mysql.DialogueRepository;
import org.dongguk.vsa.modeul.dialogue.usecase.UpdateDialogueAnswerUseCase;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakRole;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UpdateDialogueAnswerService implements UpdateDialogueAnswerUseCase {

    private final DialogueRepository dialogueRepository;
    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    @Override
    @Transactional
    public void execute(UpdateDialogueAnswerRequestDto requestDto, Long dialogueId, UUID accountId) {
        // 1. 대화 및 사용자 정보 조회
        Dialogue dialogue = dialogueRepository.findDialogueAndModeullakById(dialogueId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 권한 확인
        UserModeullak userModeullak = userModeullakRepository.findByUserAndModeullak(user, dialogue.getModeullak())
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));
        if(userModeullak.getRole() != EModeullakRole.HOST) {
            throw new CommonException(ErrorCode.ACCESS_DENIED);
        }

        // 3. 대화 답변 업데이트 (조교의 답변)
        dialogue.updateAnswer(requestDto.content(), Boolean.FALSE);

        // 4. UpdateAnswerInDialogueEvent 발생
        // TODO: UpdateAnswerInDialogueEvent 발생
    }
}
