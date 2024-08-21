package org.dongguk.vsa.modeul.dialogue.event;

import lombok.Builder;

@Builder
public record CreateDialogueEvent(
        Long dialogueId,
        String questionShortCode,
        String questionContent
) {
}
