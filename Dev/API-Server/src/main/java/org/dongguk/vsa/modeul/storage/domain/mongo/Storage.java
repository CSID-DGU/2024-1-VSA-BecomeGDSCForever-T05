package org.dongguk.vsa.modeul.storage.domain.mongo;

import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collection = "storages")
public abstract class Storage {

    /* -------------------------------------------- */
    /* Default Column ----------------------------- */
    /* -------------------------------------------- */
    @Id
    private String id;

    /* -------------------------------------------- */
    /* Information Column ------------------------- */
    /* -------------------------------------------- */
    @Field("parent_id")
    private String parentId;

    @Field("user_modeullak_id")
    private Long userModeullakId;

    @Field("name")
    protected String title;

    /* -------------------------------------------- */
    /* Timestamp Column --------------------------- */
    /* -------------------------------------------- */
    @Field("created_at")
    private LocalDateTime createdAt;

    @Field("updated_at")
    protected LocalDateTime updatedAt;

    public Storage(
            String parentId,
            Long userModeullakId,
            String title
    ) {
        this.parentId = parentId;
        this.userModeullakId = userModeullakId;

        this.title = title;

        this.createdAt = LocalDateTime.now();
        this.updatedAt = null;
    }

    abstract public String getName();
    abstract public EStorageType getType();

    abstract public void updateName(String name);
}