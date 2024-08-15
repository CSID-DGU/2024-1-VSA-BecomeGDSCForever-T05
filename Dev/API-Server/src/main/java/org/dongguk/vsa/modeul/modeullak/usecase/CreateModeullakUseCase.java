package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.UseCase;
import org.dongguk.vsa.modeul.modeullak.dto.request.CreateModeullakRequestDto;
import org.dongguk.vsa.modeul.modeullak.dto.response.CreateModeullakResponseDto;

import java.util.UUID;

@UseCase
public interface CreateModeullakUseCase {

    /**
     * 모듈락을 생성합니다.
     * @param requestDto 모듈락 생성 요청 DTO
     * @return 모듈락 생성 응답 DTO
     */
    CreateModeullakResponseDto execute(
            UUID accountId,
            CreateModeullakRequestDto requestDto
    );
}
