package org.dongguk.vsa.modeul.storage.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.storage.dto.response.StorageDetailResponseDto;

import java.util.UUID;

@UseCase
public interface ReadStorageUsingModeullakUseCase {

    /**
     * 모들락을 통해 저장소 정보 조회
     * @param accountId 계정 ID
     * @param modeullakId 모들락 ID
     * @param storageId 저장소 ID
     * @return 저장소 상세 정보 응답 DTO
     */
    StorageDetailResponseDto execute(
            UUID accountId,
            Long modeullakId,
            String storageId
    );
}
