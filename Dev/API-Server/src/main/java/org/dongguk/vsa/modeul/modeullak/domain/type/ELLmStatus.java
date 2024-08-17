package org.dongguk.vsa.modeul.modeullak.domain.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ELLmStatus {

    BEFORE("처리전", "Before"),
    AFTER("처리후", "After")
    ;

    private final String koName;
    private final String enName;
    ;

}
