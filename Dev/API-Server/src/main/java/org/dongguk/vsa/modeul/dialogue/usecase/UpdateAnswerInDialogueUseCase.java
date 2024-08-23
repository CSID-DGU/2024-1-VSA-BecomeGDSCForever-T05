package org.dongguk.vsa.modeul.dialogue.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.dialogue.dto.request.UpdateAnswerInDialogueRequestDto;

import java.util.UUID;

@UseCase

public interface UpdateAnswerInDialogueUseCase {

    /**
     * dialogue의 답변을 업데이트합니다.
     * @param requestDto dialogue 답변 업데이트 요청 DTO
     * @param dialogueId dialogue ID
     * @param accountId 계정 ID
     */
    void execute(
            UpdateAnswerInDialogueRequestDto requestDto,
            Long dialogueId,
            UUID accountId
    );

    /**
     * 대화의 답변을 업데이트합니다.
     * @param requestDialogId 대화 ID
     * @param similarDialogId 유사 대화 ID
     * @param answer 답변
     * @param keyword 키워드
     */
    void execute(
            Long requestDialogId,
            Long similarDialogId,
            String answer,
            String keyword
    );
}
