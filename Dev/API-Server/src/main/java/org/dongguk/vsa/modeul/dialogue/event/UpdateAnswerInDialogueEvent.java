package org.dongguk.vsa.modeul.dialogue.event;

import lombok.Builder;

import java.util.Map;

@Builder
public record UpdateAnswerInDialogueEvent(
        Long dialogueId,
        String question,
        String answer
) {

    public Map<String, Object> toPayload() {
        return Map.of(
                "dialogue_id", dialogueId,
                "question", question,
                "answer", answer
        );
    }
}
