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
}
