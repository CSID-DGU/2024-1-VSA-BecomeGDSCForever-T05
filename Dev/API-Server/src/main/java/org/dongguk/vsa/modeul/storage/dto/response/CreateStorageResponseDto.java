package org.dongguk.vsa.modeul.storage.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;

@Getter
public class CreateStorageResponseDto extends SelfValidating<CreateStorageResponseDto> {

    @JsonProperty("id")
    @NotNull
    private final String id;

    @Builder
    public CreateStorageResponseDto(String id) {
        this.id = id;
        validateSelf();
    }

    public static CreateStorageResponseDto fromEntity(Storage entity) {
        return CreateStorageResponseDto.builder()
                .id(entity.getId())
                .build();
    }
}
