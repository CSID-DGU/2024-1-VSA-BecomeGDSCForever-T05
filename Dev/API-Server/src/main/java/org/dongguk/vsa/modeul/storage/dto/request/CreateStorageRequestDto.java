package org.dongguk.vsa.modeul.storage.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.dongguk.vsa.modeul.core.annotation.validation.EnumValue;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;

public record CreateStorageRequestDto(
        @JsonProperty("modeullak_id")
        @NotNull
        Long modeullakId,

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
