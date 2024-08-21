package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.modeullak.dto.response.ModeullakUserBriefListResponseDto;

import java.util.UUID;

@UseCase
public interface ReadModeullakUserListUseCase {

        /**
        * 모들락 사용자 목록 조회
        * @param modeullakId 모들락 ID
        * @return 모들락 사용자 목록 응답 DTO
        */
        ModeullakUserBriefListResponseDto execute(UUID accountId, Long modeullakId);
}
