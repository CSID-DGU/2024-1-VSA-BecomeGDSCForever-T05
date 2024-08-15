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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakCommandV1Controller {

    private final CreateModeullakUseCase createModeullakUseCase;

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

        return ResponseDto.ok(responseDto);
    }
}
