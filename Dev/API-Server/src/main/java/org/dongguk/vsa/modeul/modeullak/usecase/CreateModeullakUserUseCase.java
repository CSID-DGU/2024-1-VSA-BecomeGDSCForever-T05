package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.modeullak.dto.request.CreateModeullakUserRequestDto;

import java.util.UUID;

@UseCase
public interface CreateModeullakUserUseCase {

    /**
     * 모들락 사용자 생성
     * @param requestDto 요청 DTO
     */
    void execute(UUID accountId, CreateModeullakUserRequestDto requestDto);
}
