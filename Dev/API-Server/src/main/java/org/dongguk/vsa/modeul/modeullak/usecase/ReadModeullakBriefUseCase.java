package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.modeullak.dto.response.ModeullakBriefResponseDto;

@UseCase
public interface ReadModeullakBriefUseCase {

    /**
     * 모들락 간략 조회
     * @param participationCode 모들락 참여 코드
     * @return 모들락 간략 조회 응답
     */
    ModeullakBriefResponseDto execute(String participationCode);
}
