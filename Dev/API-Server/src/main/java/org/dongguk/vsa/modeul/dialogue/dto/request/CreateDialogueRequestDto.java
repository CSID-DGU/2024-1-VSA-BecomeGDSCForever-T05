package org.dongguk.vsa.modeul.dialogue.dto.request;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;

public record CreateDialogueRequestDto(

        @NotNull
        @JsonProperty("modeullak_id")
        Long modeullakId,

        @NotNull
        @JsonProperty("storage_id")
        String storageId,

        @NotNull
        @JsonProperty("short_code")
        String shortCode,

        @NotNull
        @JsonProperty("content")
        String content
) {
}
