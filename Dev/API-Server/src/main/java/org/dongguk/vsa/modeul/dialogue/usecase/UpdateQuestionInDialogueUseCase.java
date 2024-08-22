package org.dongguk.vsa.modeul.dialogue.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.dialogue.dto.request.UpdateQuestionInDialogueRequestDto;

import java.util.UUID;

@UseCase

public interface UpdateQuestionInDialogueUseCase {

    /**
     * dialogue의 질문을 생성합니다.
     * @param updateQuestionInDialogueRequestDto dialogue 질문 생성 요청 DTO
     * @Param dialogueId dialogue ID
     */
    void execute(
            UpdateQuestionInDialogueRequestDto updateQuestionInDialogueRequestDto,
            UUID accountId,
            Long dialogueId
    );
}
