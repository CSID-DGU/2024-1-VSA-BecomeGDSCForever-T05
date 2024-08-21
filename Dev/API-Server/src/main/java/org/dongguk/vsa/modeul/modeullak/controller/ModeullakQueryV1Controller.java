package org.dongguk.vsa.modeul.modeullak.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakBriefUseCase;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakDetailUseCase;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakSummaryUseCase;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakQueryV1Controller {

    private final ReadModeullakBriefUseCase readModeullakBriefUseCase;
    private final ReadModeullakSummaryUseCase readModeullakSummaryUseCase;
    private final ReadModeullakDetailUseCase readModeullakDetailUseCase;

    @GetMapping("/modeullaks/briefs")
    public ResponseDto<?> readModeullakSummary(
            @RequestParam(value = "code") String participationCode
    ) {
        return ResponseDto.ok(readModeullakBriefUseCase.execute(participationCode));
    }

    @GetMapping("/modeullaks/{modeullakId}/summaries")
    public ResponseDto<?> readModeullakSummary(
            @AccountID UUID accountId,
            @PathVariable Long modeullakId
    ) {
        return ResponseDto.ok(readModeullakSummaryUseCase.execute(accountId, modeullakId));
    }

    @GetMapping("/modeullaks/{modeullakId}")
    public ResponseDto<?> readModeullakDetail(
            @AccountID UUID accountId,
            @PathVariable Long modeullakId
    ) {
        return ResponseDto.ok(readModeullakDetailUseCase.execute(accountId, modeullakId));
    }
}
