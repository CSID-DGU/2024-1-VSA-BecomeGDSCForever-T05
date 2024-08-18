package org.dongguk.vsa.modeul.storage.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.storage.dto.request.UpdateContentInStorageRequestDto;

import java.util.UUID;

@UseCase
public interface UpdateContentInStorageUseCase {

    /**
     * 저장소 내용 수정
     * @param accountId 계정 ID
     * @param requestDto 저장소 내용 수정 요청 DTO
     */
    void execute(
            UUID accountId,
            String storageId,
            UpdateContentInStorageRequestDto requestDto
    );
}
