package org.dongguk.vsa.modeul.modeullak.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.modeullak.dto.request.CreateModeullakUserRequestDto;
import org.dongguk.vsa.modeul.modeullak.usecase.CreateModeullakUserUseCase;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakUserCommandV1Controller {

    private final CreateModeullakUserUseCase createModeullakUserUseCase;

    @PostMapping("/modeullaks/users")
    public ResponseDto<?> createModeullakUser(
            @AccountID UUID accountId,
            @RequestBody @Valid CreateModeullakUserRequestDto requestDto
    ) {
        createModeullakUserUseCase.execute(accountId, requestDto);
        
        return ResponseDto.ok(null);
    }
}
