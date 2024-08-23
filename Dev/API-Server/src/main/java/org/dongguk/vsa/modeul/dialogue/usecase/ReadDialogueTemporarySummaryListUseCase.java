package org.dongguk.vsa.modeul.dialogue.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.dialogue.dto.response.DialogueSummaryListDto;
import org.dongguk.vsa.modeul.dialogue.dto.response.DialogueTemporarySummaryListDto;

import java.util.UUID;

@UseCase
public interface ReadDialogueTemporarySummaryListUseCase {

    /**
     * 본인과 모을락을 이용하여 모들락의 대화 요약 목록을 조회합니다.
     *
     * @param accountId 사용자 ID
     * @param modeullakId 모을락 ID
     *
     * @return 대화 요약 리스트 DTO
     */
    DialogueTemporarySummaryListDto execute(
            UUID accountId,
            Long modeullakId
    );

    /**
     * 본인, 타 사용자와 모을락을 이용하여 특정 사용자의 대화 요약 목록을 조회합니다.
     * @param accountId 사용자 ID
     * @param modeullakId 모을락 ID
     * @return 대화 요약 리스트 DTO
     */
    DialogueTemporarySummaryListDto execute(
            UUID accountId,
            UUID userId,
            Long modeullakId
    );
}
