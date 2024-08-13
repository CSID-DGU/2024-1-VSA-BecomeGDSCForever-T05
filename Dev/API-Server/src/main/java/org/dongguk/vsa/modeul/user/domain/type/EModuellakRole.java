package org.dongguk.vsa.modeul.user.domain.type;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum EModuellakRole {

    HOST("ROLE_HOST", "관리자"),
    PARTICIPANT("ROLE_PARTICIPANT", "참가자");

    private final String key;
    private final String title;

    public static EModuellakRole of(String key) {
        for (EModuellakRole role : values()) {
            if (role.getKey().equals(key)) {
                return role;
            }
        }
        throw new IllegalArgumentException("Invalid key: " + key);
    }
}
