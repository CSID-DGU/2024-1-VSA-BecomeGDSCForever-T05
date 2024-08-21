package org.dongguk.vsa.modeul.storage.domain.mongo;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collection = "storages")
@TypeAlias("file")
public class File extends Storage {
    /* -------------------------------------------- */
    /* Information Column ------------------------- */
    /* -------------------------------------------- */
    @Field("content")
    private String content;

    @Field("extension")
    private String extension;

    /* -------------------------------------------- */
    /* Methods ------------------------------------ */
    /* -------------------------------------------- */
    @Builder
    public File(
            String parentId,
            Long userModeullakId,
            String title,
            String extension
    ) {
        super(
                parentId,
                userModeullakId,
                title
        );

        this.content = "";
        this.extension = extension;
    }

    @Override
    public String getName() {
        return title + "." + extension;
    }

    @Override
    public EStorageType getType() {
        return EStorageType.FILE;
    }

    @Override
    public void updateName(String name) {
        int lastDotIndex = name.lastIndexOf(".");

        this.title = name.substring(0, lastDotIndex);
        this.extension = name.substring(lastDotIndex + 1);

        this.updatedAt = LocalDateTime.now();
    }

    public void updateContent(String content) {
        this.content = content;

        this.updatedAt = LocalDateTime.now();
    }
}