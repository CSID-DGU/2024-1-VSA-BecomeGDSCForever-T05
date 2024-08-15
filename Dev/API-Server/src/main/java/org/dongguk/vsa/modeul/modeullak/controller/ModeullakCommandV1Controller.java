package org.dongguk.vsa.modeul.modeullak.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.HttpCommonException;
import org.dongguk.vsa.modeul.modeullak.dto.request.CreateModeullakRequestDto;
import org.dongguk.vsa.modeul.modeullak.dto.response.CreateModeullakResponseDto;
import org.dongguk.vsa.modeul.modeullak.usecase.CreateModeullakUseCase;
import org.dongguk.vsa.modeul.modeullak.usecase.DeleteModeullakUseCase;
import org.dongguk.vsa.modeul.modeullak.usecase.UpdateStatusInModeullakUseCase;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakCommandV1Controller {

    private final CreateModeullakUseCase createModeullakUseCase;
    private final DeleteModeullakUseCase deleteModeullakUseCase;

    private final UpdateStatusInModeullakUseCase updateStatusInModeullakUseCase;


    @PostMapping("/modeullaks")
    public ResponseDto<?> create(
            @AccountID UUID accountId,
            @RequestBody @Valid CreateModeullakRequestDto requestDto
    ) {
        if (requestDto.hour() + requestDto.minute() == 0) {
            throw new HttpCommonException(ErrorCode.INVALID_ARGUMENT);
        }

        CreateModeullakResponseDto responseDto = createModeullakUseCase.execute(
                accountId,
                requestDto
        );

        return ResponseDto.created(responseDto);
    }

    @PatchMapping("/modeullaks/{modeullakId}")
    public ResponseDto<?> updateStatusInModeullak(
            @AccountID UUID accountId,
            @PathVariable("modeullakId") Long modeullakId
    ) {

        updateStatusInModeullakUseCase.execute(accountId, modeullakId);

        return ResponseDto.ok(null);
    }

    @DeleteMapping("/modeullaks/{modeullakId}")
    public ResponseDto<?> deleteModeullak(
            @AccountID UUID accountId,
            @PathVariable("modeullakId") Long modeullakId
    ) {

        deleteModeullakUseCase.deleteModeullak(accountId, modeullakId);

        return ResponseDto.noContent();
    }
}
