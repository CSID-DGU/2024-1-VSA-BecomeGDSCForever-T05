package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.modeullak.dto.response.CurrentUserParticipationStatusesResponseDto;

import java.util.UUID;

@UseCase
public interface ReadCurrentUserParticipationStatusesUseCase {

    /**
     * 현재 사용자의 참여 상태를 조회합니다.
     *
     * @param accountId 사용자 계정 ID
     *
     * @return 현재 사용자의 참여 상태
     */
    CurrentUserParticipationStatusesResponseDto execute(UUID accountId);
}
