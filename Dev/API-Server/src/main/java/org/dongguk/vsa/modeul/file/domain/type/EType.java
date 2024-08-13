package org.dongguk.vsa.modeul.file.domain.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Getter
@RequiredArgsConstructor
public enum EType {
    FILE("file"),
    DIRECTORY("directory")

    ;

    private final String type;

    public static EType of(String type) {
        if (type.equals("file")) {
            return FILE;
        } else if (type.equals("directory")) {
            return DIRECTORY;
        } else {
            throw new IllegalArgumentException("Invalid Type");
        }
    }
}
