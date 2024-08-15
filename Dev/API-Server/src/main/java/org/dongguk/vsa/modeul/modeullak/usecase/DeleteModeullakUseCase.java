package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.UseCase;

import java.util.UUID;

@UseCase
public interface DeleteModeullakUseCase {

    /**
     * 모들락 삭제
     * @param accountId 계정 ID
     * @param modeullakId 모들락 ID
     */
    void deleteModeullak(
            UUID accountId,
            Long modeullakId
    );
}
