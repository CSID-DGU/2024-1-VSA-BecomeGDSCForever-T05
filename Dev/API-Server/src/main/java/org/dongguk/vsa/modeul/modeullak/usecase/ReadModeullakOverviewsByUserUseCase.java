package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.UseCase;
import org.dongguk.vsa.modeul.modeullak.dto.response.ModeullakOverviewListResponseDto;

import java.util.UUID;

@UseCase
public interface ReadModeullakOverviewsByUserUseCase {

    /**
     * 사용자의 모들락 개요를 조회합니다.
     * @param accountId 사용자 계정 ID
     * @param whichAt 조회할 날짜
     * @return 사용자의 모들락 개요
     */
    ModeullakOverviewListResponseDto execute(UUID accountId, String whichAt);
}
