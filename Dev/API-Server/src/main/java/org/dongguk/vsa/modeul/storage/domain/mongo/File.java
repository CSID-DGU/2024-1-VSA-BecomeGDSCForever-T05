package org.dongguk.vsa.modeul.storage.domain.mongo;

import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collection = "`files`")
public class File implements Storage {

    /* -------------------------------------------- */
    /* Default Column ----------------------------- */
    /* -------------------------------------------- */
    @Id
    private String id;

    /* -------------------------------------------- */
    /* Information Column ------------------------- */
    /* -------------------------------------------- */
    @Field("name")
    private String title;

    @Field("content")
    private String content;

    @Field("extension")
    private String extension;

    /* -------------------------------------------- */
    /* Timestamp Column --------------------------- */
    /* -------------------------------------------- */
    @Field("created_at")
    private LocalDateTime createdAt;

    @Field("updated_at")
    private LocalDateTime updatedAt;

    /* -------------------------------------------- */
    /* Methods ------------------------------------ */
    /* -------------------------------------------- */
    @Builder
    public File(String fileName) {
        this.title = fileName.substring(0, fileName.lastIndexOf("."));
        this.content = "";
        this.extension = fileName.substring(fileName.lastIndexOf(".")+1);

        this.createdAt = LocalDateTime.now();
    }

    @Override
    public EStorageType getType() {
        return EStorageType.FILE;
    }

    public void updateTitleAndExtension(String fileName) {
        this.title = fileName.substring(0, fileName.lastIndexOf("."));
        this.extension = fileName.substring(fileName.lastIndexOf(".")+1);

        this.updatedAt = LocalDateTime.now();
    }

    public void updateContent(String content) {
        this.content = content;

        this.updatedAt = LocalDateTime.now();
    }
}