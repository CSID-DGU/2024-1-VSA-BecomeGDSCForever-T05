package org.dongguk.vsa.modeul.storage.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.storage.dto.response.StorageBriefListResponseDto;

import java.util.UUID;

@UseCase
public interface ReadStorageBriefUsingUserAndModeullakUseCase {

    /**
     * 사용자와 모듈락에 해당하는 저장소 간략 정보를 조회한다.
     *
     * @param accountId 계정 ID
     * @param modeullakId 모듈락 ID
     *
     * @return 저장소 간략 정보 목록
     */
    StorageBriefListResponseDto execute(UUID accountId, Long modeullakId);

    /**
     * 사용자와 모듈락에 해당하는 저장소 간략 정보를 조회한다.
     * AccountId와 UserId가 다른 경우 사용한다.
     *
     * @param accountId 계정 ID
     * @param modeullakId 모듈락 ID
     * @param userId 사용자 ID
     *
     * @return 저장소 간략 정보 목록
     */
    StorageBriefListResponseDto execute(UUID accountId, Long modeullakId, UUID userId);
}
