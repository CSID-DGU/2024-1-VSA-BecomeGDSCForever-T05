package org.dongguk.vsa.modeul.user.domain.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ESecurityRole {

    ADMIN("관리자", "ADMIN", "ROLE_ADMIN"),
    USER("사용자", "USER", "ROLE_USER"),

    ;

    private final String koName;
    private final String enName;
    private final String securityName;

    public static ESecurityRole fromString(String value) {
        return switch (value.toUpperCase()) {
            case "ADMIN" -> ADMIN;
            case "USER" -> USER;
            default -> throw new IllegalArgumentException("Security Role이 잘못되었습니다.");
        };
    }
}
