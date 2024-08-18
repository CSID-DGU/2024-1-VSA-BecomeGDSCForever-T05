package org.dongguk.vsa.modeul.storage.domain.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum EStorageType {
    FILE("파일", "FILE", true),
    DIRECTORY("디렉토리", "DIRECTORY", false)

    ;

    private final String krName;
    private final String enName;
    private final Boolean isLeaf;

    public static EStorageType fromString(String str) {
        return switch (str.toUpperCase()) {
            case "FILE" -> FILE;
            case "DIRECTORY" -> DIRECTORY;
            default -> throw new IllegalArgumentException("Invalid Type");
        };
    }
}
