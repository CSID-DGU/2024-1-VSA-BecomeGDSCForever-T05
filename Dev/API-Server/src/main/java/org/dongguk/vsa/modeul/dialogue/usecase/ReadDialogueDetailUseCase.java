package org.dongguk.vsa.modeul.dialogue.usecase;


import org.dongguk.vsa.modeul.dialogue.dto.response.DialogueDetailResponseDto;

import java.util.UUID;

public interface ReadDialogueDetailUseCase {

    /**
     * dialogue 상세(Detail) 조회합니다.
     * @param dialogueId dialogue ID
     */
    DialogueDetailResponseDto execute(
            Long dialogueId
    );
}
