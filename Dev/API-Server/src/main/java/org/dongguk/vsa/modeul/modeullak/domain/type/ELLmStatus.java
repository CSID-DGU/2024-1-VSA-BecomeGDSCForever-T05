package org.dongguk.vsa.modeul.modeullak.domain.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ELLmStatus {

    BEFORE("처리전"),
    AFTER("처리후")

    ;

    private final String description;
}
