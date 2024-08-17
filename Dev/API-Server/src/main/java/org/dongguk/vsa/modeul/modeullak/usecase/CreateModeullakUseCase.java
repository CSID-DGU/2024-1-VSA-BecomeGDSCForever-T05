package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.modeullak.dto.request.CreateModeullakRequestDto;
import org.dongguk.vsa.modeul.modeullak.dto.response.CreateModeullakResponseDto;

import java.util.UUID;

@UseCase
public interface CreateModeullakUseCase {

    /**
     * 모들락을 생성합니다.
     * @param requestDto 모들락 생성 요청 DTO
     * @return 모들락 생성 응답 DTO
     */
    CreateModeullakResponseDto execute(
            UUID accountId,
            CreateModeullakRequestDto requestDto
    );
}
