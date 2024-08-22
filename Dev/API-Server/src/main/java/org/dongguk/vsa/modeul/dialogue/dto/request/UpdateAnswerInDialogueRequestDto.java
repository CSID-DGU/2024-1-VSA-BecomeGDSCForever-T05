package org.dongguk.vsa.modeul.dialogue.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;

public record UpdateAnswerInDialogueRequestDto(

        @NotNull
        @JsonProperty("content")
        String content
) {
}
