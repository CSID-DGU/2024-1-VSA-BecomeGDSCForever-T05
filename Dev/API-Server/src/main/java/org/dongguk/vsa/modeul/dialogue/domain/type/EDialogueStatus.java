package org.dongguk.vsa.modeul.dialogue.domain.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum EDialogueStatus {
    PENDING("팬딩중", "Pending"),
    WAITING("대기중", "Waiting"),
    COMPLETED("완료", "Completed");

    private final String krName;
    private final String enName;
}
