package org.dongguk.vsa.modeul.file.domain.mongo;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.file.domain.type.EType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collection = "`directories`")
public class DirectoryComposite implements Component {

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

    @Field("name")
    private String name;

    @Field("children")
    private List<Component> children = new ArrayList<>();

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
    public DirectoryComposite(String name, Long userModeullakId) {
        this.userModeullakId = userModeullakId;
        this.name = name;

        this.createdAt = LocalDateTime.now();
    }

    @Override
    public EType getType() {
        return EType.DIRECTORY;
    }
}


