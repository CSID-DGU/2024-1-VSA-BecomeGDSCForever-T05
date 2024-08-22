package org.dongguk.vsa.modeul.dialogue.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.dialogue.usecase.ReadDialogueSummaryListUseCase;
import org.dongguk.vsa.modeul.dialogue.usecase.ReadDialogueTemporarySummaryListUseCase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakUserDialogueQueryV1Controller {

    private final ReadDialogueSummaryListUseCase readDialogueSummaryListUseCase;
    private final ReadDialogueTemporarySummaryListUseCase readDialogueTemporarySummaryListUseCase;

    /**
     * 5-1. (모들락 종속) 나의 모들락 대화 요약(Sumamry) 목록 조회하기
     *
     * @param accountId 요청한 사용자의 ID
     * @param modeullakId 모들락 ID
     *
     * @return 나의 모들락 대화 요약(Summary) 목록
     */
    @GetMapping("/modeullaks/{modeullakId}/users/dialogues/summaries")
    public ResponseDto<?> readDialogueSummaryList(
            @AccountID UUID accountId,
            @PathVariable Long modeullakId
    ) {
        return ResponseDto.ok(readDialogueSummaryListUseCase.execute(accountId, modeullakId));
    }

    /**
     * 5-4. (모들락) 나의 모들락 대화 임시 요약(Temporary Sumamry) 목록 조회하기
     *
     * @param accountId 요청한 사용자의 ID
     * @param modeullakId 모들락 ID
     *
     * @return 나의 모들락 대화 임시 요약(Temporary Summary) 목록
     */
    @GetMapping("/modeullaks/{modeullakId}/users/dialogues/temporary-summaries")
    public ResponseDto<?> readTemporaryDialogueSummaryList(
            @AccountID UUID accountId,
            @PathVariable Long modeullakId
    ) {
        return ResponseDto.ok(readDialogueTemporarySummaryListUseCase.execute(accountId, accountId, modeullakId));
    }

    /**
     * 5-5. (모들락, 사용자 종속) 사용자의 모들락 대화 임시 요약( TemporarySumamry) 목록 조회하기
     *
     * @param accountId 요청한 사용자의 ID
     * @param modeullakId 모들락 ID
     * @param userId 조회할 사용자의 ID
     *
     * @return 타 사용자의 모들락 대화 임시 요약(Temporary Summary) 목록
     */
    @GetMapping("/modeullaks/{modeullakId}/users/{userId}/dialogues/temporary-summaries")
    public ResponseDto<?> readTemporaryDialogueSummaryList(
            @AccountID UUID accountId,
            @PathVariable Long modeullakId,
            @PathVariable UUID userId
    ) {
        return ResponseDto.ok(readDialogueTemporarySummaryListUseCase.execute(accountId, userId, modeullakId));
    }
}
