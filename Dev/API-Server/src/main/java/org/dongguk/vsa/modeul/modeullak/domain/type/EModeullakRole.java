package org.dongguk.vsa.modeul.modeullak.domain.type;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum EModeullakRole {

    HOST("관리자", "HOST"),
    PARTICIPANT("참가자", "PARTICIPANT")

    ;

    private final String koName;
    private final String enName;
}
