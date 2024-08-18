package org.dongguk.vsa.modeul.storage.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotEmpty;
import org.dongguk.vsa.modeul.core.annotation.validation.EnumValue;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;

public record CreateStorageRequestDto(
        @JsonProperty("parent_storage_id")
        String parentStorageId,

        @JsonProperty
        @EnumValue(enumClass = EStorageType.class)
        String type,

        @JsonProperty("name")
        @NotEmpty
        String name
) {
}
