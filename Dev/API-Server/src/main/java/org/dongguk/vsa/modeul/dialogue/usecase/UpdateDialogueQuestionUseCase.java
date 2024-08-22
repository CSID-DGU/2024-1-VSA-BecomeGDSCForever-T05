package org.dongguk.vsa.modeul.dialogue.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.dialogue.dto.request.UpdateDialogueQuestionRequestDto;

import java.util.UUID;

@UseCase

public interface UpdateDialogueQuestionUseCase {

    /**
     * dialogue의 질문을 생성합니다.
     * @param updateDialogueQuestionRequestDto dialogue 질문 생성 요청 DTO
     * @Param dialogueId dialogue ID
     */
    void execute(
            UpdateDialogueQuestionRequestDto updateDialogueQuestionRequestDto,
            UUID accountId,
            Long dialogueId
    );
}
