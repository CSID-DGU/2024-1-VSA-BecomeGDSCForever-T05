package org.dongguk.vsa.modeul.storage.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.storage.dto.request.CreateStorageRequestDto;
import org.dongguk.vsa.modeul.storage.dto.response.StorageIdResponseDto;

import java.util.UUID;

@UseCase
public interface CreateStorageUsingModeullakUseCase {

    /**
     * 모듈락에 저장소를 생성한다.
     * @param accountId 계정 ID
     * @param modeullakId 모듈락 ID
     * @param requestDto 저장소 생성 요청 DTO
     */
    StorageIdResponseDto execute(UUID accountId, Long modeullakId, CreateStorageRequestDto requestDto);
}
