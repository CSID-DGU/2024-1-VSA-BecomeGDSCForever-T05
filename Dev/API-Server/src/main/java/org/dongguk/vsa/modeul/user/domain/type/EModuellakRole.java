package org.dongguk.vsa.modeul.user.domain.type;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum EModuellakRole {


    HOST("관리자", "Host"),
    PARTICIPANT("참가자", "Participant")
    ;

    private final String koName;
    private final String enName;
    ;

}
