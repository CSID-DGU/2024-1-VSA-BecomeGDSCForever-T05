package org.dongguk.vsa.modeul.file.domain.mongo;

import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.file.domain.type.EType;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collection = "`files`")
public class FileLeaf implements Component {

    @Id
    private String id;

    @Field("name")
    private String name;

    @Field("type")
    private final EType type = EType.FILE;

    @Field("content")
    private String content;

    @Builder
    public FileLeaf(String name, String content) {
        this.name = name;
        this.content = content;
    }
}