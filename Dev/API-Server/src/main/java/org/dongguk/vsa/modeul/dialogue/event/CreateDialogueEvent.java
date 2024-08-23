package org.dongguk.vsa.modeul.dialogue.event;

import lombok.Builder;

import java.util.Map;

@Builder
public record CreateDialogueEvent(
        Long dialogueId,
        String questionLongCode,
        String questionShortCode,
        String questionContent
) {
    public Map<String, Object> toPayload() {
        return Map.of(
                "request_dialogue_id", dialogueId,
                "long_code", questionLongCode,
                "short_code", questionShortCode,
                "question_content", questionContent
        );
    }
}
