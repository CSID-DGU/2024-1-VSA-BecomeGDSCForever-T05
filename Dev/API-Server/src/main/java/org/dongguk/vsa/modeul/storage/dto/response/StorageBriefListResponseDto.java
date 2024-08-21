package org.dongguk.vsa.modeul.storage.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.storage.domain.mongo.Directory;
import org.dongguk.vsa.modeul.storage.domain.mongo.File;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Getter
public class StorageBriefListResponseDto extends SelfValidating<StorageBriefListResponseDto> {
    @JsonProperty("storages")
    @NotNull
    private final List<StorageBriefDto> storages;

    @Builder
    public StorageBriefListResponseDto(List<StorageBriefDto> storages) {
        this.storages = storages;

        this.validateSelf();
    }

    public static StorageBriefListResponseDto fromEntitiesAndChildren(List<Storage> entities, Map<String, List<Storage>> children) {
        List<StorageBriefDto> storages = entities.stream()
            .map(entity -> StorageBriefDto.fromEntityAndChildren(entity, children))
            .toList();

        return StorageBriefListResponseDto.builder()
            .storages(storages)
            .build();
    }

    @Getter
    public static class StorageBriefDto extends SelfValidating<StorageBriefDto> {
        @JsonProperty("id")
        @NotNull
        private final String id;

        @JsonProperty("type")
        @NotNull
        private final String type;

        @JsonProperty("name")
        @NotNull
        private final String name;

        @JsonProperty("children")
        @JsonInclude(JsonInclude.Include.NON_NULL)
        private final List<StorageBriefDto> children;

        @Builder
        public StorageBriefDto(
                String id,
                String type,
                String name,
                List<StorageBriefDto> children
        ) {
            this.id = id;
            this.type = type;
            this.name = name;
            this.children = children;
        }

        public static StorageBriefDto fromEntityAndChildren(Storage entity, Map<String, List<Storage>> childrenMap) {
            return switch (entity.getType()) {
                case FILE -> {
                    File file = (File) entity;

                    yield StorageBriefDto.builder()
                        .id(file.getId())
                        .type(file.getType().getEnName())
                        .name(file.getName())
                        .build();
                }
                case DIRECTORY -> {
                    Directory directory = (Directory) entity;

                    List<StorageBriefDto> children = childrenMap.getOrDefault(directory.getId(), new ArrayList<>())
                        .stream()
                        .map(child -> fromEntityAndChildren(child, childrenMap))
                        .toList();

                    yield StorageBriefDto.builder()
                        .id(directory.getId())
                        .type(directory.getType().getEnName())
                        .name(directory.getName())
                        .children(children)
                        .build();
                }
            };
        }
    }
}
