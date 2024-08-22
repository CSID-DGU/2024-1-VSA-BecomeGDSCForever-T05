package org.dongguk.vsa.modeul.dialogue.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.dialogue.dto.response.DialogueSummaryListDto;

import java.util.UUID;

@UseCase
public interface ReadDialogueSummaryListUseCase {

    /**
     * 사용자와 모드락을 이용하여 대화 요약을 조회합니다.
     * @param accountId 계정 ID
     * @param modeullakId 모드락 ID
     * @return 대화 요약 리스트 DTO
     */
    DialogueSummaryListDto execute(UUID accountId, Long modeullakId);
}
