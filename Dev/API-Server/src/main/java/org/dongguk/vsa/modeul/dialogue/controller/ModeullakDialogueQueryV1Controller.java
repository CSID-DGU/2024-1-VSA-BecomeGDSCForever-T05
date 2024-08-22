package org.dongguk.vsa.modeul.dialogue.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.dialogue.usecase.ReadDialogueTemporarySummaryListUseCase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakDialogueQueryV1Controller {

    private final ReadDialogueTemporarySummaryListUseCase readDialogueTemporarySummaryListUseCase;

    /**
     * 5-3. (모들락 종속) 모들락 대화 임시 요약(Sumamry) 목록 조회하기
     *
     * @param accountId 요청한 사용자의 ID
     * @param modeullakId 모들락 ID
     *
     * @return 해당 모들락의 대화 임시 요약(Summary) 목록
     */
    @GetMapping("/modeullaks/{modeullakId}/dialogues/temporary-summaries")
    public ResponseDto<?> readTemporaryDialogueSummaryList(
            @AccountID UUID accountId,
            @PathVariable Long modeullakId
    ) {
        return ResponseDto.ok(readDialogueTemporarySummaryListUseCase.execute(accountId, modeullakId));
    }
}
