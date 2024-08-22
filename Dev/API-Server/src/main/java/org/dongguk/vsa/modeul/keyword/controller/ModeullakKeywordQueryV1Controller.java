package org.dongguk.vsa.modeul.keyword.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.keyword.usecase.ReadKeywordListUsingModeullakUseCase;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakKeywordQueryV1Controller {

    private final ReadKeywordListUsingModeullakUseCase readKeywordListUsingModeullakUseCase;

    @GetMapping("/modeullaks/{modeullakId}/keywords")
    public ResponseDto<?> readKeywordListUsingModeullak(
            @AccountID UUID accountId,
            @PathVariable("modeullakId") Long modeullakId,
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "100") Integer size
    ) {
        if (page < 0 || size < 0) {
            throw new CommonException(ErrorCode.BAD_REQUEST_PARAMETER);
        }

        return ResponseDto.ok(
                readKeywordListUsingModeullakUseCase.execute(
                        accountId,
                        modeullakId,
                        page,
                        size
                )
        );
    }
}
