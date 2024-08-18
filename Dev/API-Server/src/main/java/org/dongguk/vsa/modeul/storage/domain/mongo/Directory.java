package org.dongguk.vsa.modeul.storage.domain.mongo;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collection = "storages")
@TypeAlias("directory")
public class Directory extends Storage {

    /* -------------------------------------------- */
    /* Methods ------------------------------------ */
    /* -------------------------------------------- */
    @Builder
    public Directory(
            String parentId,
            Long userModeullakId,
            String title
    ) {
        super(
                parentId,
                userModeullakId,
                title
        );
    }

    @Override
    public String getName() {
        return title;
    }

    @Override
    public EStorageType getType() {
        return EStorageType.DIRECTORY;
    }

    @Override
    public void updateName(String name) {
        this.title = name;

        this.updatedAt = LocalDateTime.now();
    }
}


