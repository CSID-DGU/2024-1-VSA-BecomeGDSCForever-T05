package org.dongguk.vsa.modeul.modeullak.domain.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum EModeullakStatus {

    // 모들 시작, 모들 종료, LLM 시작, LLM 종료
    STARTED("시작", "STARTED"),
    ENDED("종료", "ENDED"),
    LLM_STARTED("LLM 시작", "LLM STARTED"),
    LLM_ENDED("LLM 종료", "LLM ENDED")

    ;

    private final String koName;
    private final String enName;
    ;

}
