package org.dongguk.vsa.modeul.modeullak.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.List;

public record CreateModeullakRequestDto(
        @JsonProperty("title")
        @NotNull
        @Size(min = 1, max = 20)
        String title,

        @JsonProperty("hour")
        @NotNull
        @Min(0) @Max(23)
        Integer hour,

        @JsonProperty("minute")
        @NotNull
        @Min(0) @Max(59)
        Integer minute,

        @JsonProperty("tags")
        @NotNull
        List<String> tags
) {
}
