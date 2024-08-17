package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;

import java.util.UUID;

@UseCase
public interface UpdateStatusInModeullakUseCase {

    /**
     * 모들락의 상태를 종료로 변경합니다.
     * @param accountId 계정 ID
     * @param modeullakId 모들락 ID
     */
    void execute(
            UUID accountId,
            Long modeullakId
    );
}
