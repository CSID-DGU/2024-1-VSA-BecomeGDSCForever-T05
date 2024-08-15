package org.dongguk.vsa.modeul.modeullak.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakSummaryUseCase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakQueryV1Controller {

    private final ReadModeullakSummaryUseCase readModeullakSummaryUseCase;

    @GetMapping("/modeullaks/{modeullakId}/summaries")
    public ResponseDto<?> readModeullakSummary(
            @AccountID UUID accountId,
            @PathVariable Long modeullakId
    ) {
        return ResponseDto.ok(readModeullakSummaryUseCase.execute(accountId, modeullakId));
    }
}
