package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.modeullak.dto.response.ModeullakDetailResponseDto;

import java.util.UUID;

@UseCase
public interface ReadModeullakDetailUseCase {

    /**
     * 모들락 상세 조회
     * @param accountId 사용자 ID
     * @param modeullakId 모들락 ID
     * @return 모들락 상세 조회 응답 DTO
     */
    ModeullakDetailResponseDto execute(UUID accountId, Long modeullakId);
}
