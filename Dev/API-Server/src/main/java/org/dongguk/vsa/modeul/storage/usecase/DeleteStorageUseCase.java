package org.dongguk.vsa.modeul.storage.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import java.util.UUID;

@UseCase
public interface DeleteStorageUseCase {

    /**
     * 모듈락에 저장소를 생성한다.
     * @param accountId 계정 ID
     * @param storageId 저장소 ID
     */
    void execute(UUID accountId, String storageId);
}
