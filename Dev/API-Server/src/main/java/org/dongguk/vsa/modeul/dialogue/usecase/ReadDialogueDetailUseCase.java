package org.dongguk.vsa.modeul.dialogue.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.dialogue.dto.response.DialogueDetailDto;

@UseCase
public interface ReadDialogueDetailUseCase {

    /**
     * dialogue 상세(Detail) 조회합니다.
     * @param dialogueId dialogue ID
     */
    DialogueDetailDto execute(
            Long dialogueId
    );
}
