package org.dongguk.vsa.modeul.storage.domain.mongo;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collection = "`directories`")
public class Directory implements Storage {

    /* -------------------------------------------- */
    /* Default Column ----------------------------- */
    /* -------------------------------------------- */
    @Id
    private String id;

    /* -------------------------------------------- */
    /* Information Column ------------------------- */
    /* -------------------------------------------- */
    @Field("user_modeullak_id")
    private Long userModeullakId;

    @Field("title")
    private String title;

    @Field("children")
    private List<Storage> children = new ArrayList<>();

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
    public Directory(String title, Long userModeullakId) {
        this.userModeullakId = userModeullakId;
        this.title = title;

        this.createdAt = LocalDateTime.now();
    }

    @Override
    public String getExtension() {
        return "";
    }

    @Override
    public EStorageType getType() {
        return EStorageType.DIRECTORY;
    }

    public void updateTitle(String title) {
        this.title = title;

        this.updatedAt = LocalDateTime.now();
    }
}


