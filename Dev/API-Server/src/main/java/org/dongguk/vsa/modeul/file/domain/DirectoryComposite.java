package org.dongguk.vsa.modeul.file.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.file.domain.type.EType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collection = "`directories`")
public class DirectoryComposite implements Component {

    @Id
    private String id;

    @Field("user_modeullak_id")
    private Long userModeullakId;

    @Field("name")
    private String name;

    @Field("type")
    private final EType type = EType.DIRECTORY;

    @Field("children")
    private List<Component> children = new ArrayList<>();

    @Builder
    public DirectoryComposite(String name, Long userModeullakId) {
        this.userModeullakId = userModeullakId;
        this.name = name;
    }

    public void saveFile(Component component) {
        children.add(component);
    }
}


