package org.dongguk.vsa.modeul.storage.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.storage.domain.mongo.File;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;

@Getter
public class StorageDetailResponseDto extends SelfValidating<StorageDetailResponseDto> {
    @JsonProperty("content")
    private final String content;

    @Builder
    public StorageDetailResponseDto(String content) {
        this.content = content;
    }

    public static StorageDetailResponseDto fromEntity(Storage storage) {
        File file = (File) storage;

        return StorageDetailResponseDto.builder()
                .content(file.getContent())
                .build();
    }
}
