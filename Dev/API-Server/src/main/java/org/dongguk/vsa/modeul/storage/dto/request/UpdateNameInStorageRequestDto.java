package org.dongguk.vsa.modeul.storage.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;

public record UpdateNameInStorageRequestDto(
        @JsonProperty("name")
        @NotNull
        String name
) {
}
