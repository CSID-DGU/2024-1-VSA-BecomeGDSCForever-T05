package org.dongguk.vsa.modeul.storage.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;

@Getter
public class StorageIdResponseDto extends SelfValidating<StorageIdResponseDto> {

    @JsonProperty("id")
    @NotNull
    private final String id;

    @Builder
    public StorageIdResponseDto(String id) {
        this.id = id;
        validateSelf();
    }

    public static StorageIdResponseDto fromEntity(Storage entity) {
        return StorageIdResponseDto.builder()
                .id(entity.getId())
                .build();
    }
}
