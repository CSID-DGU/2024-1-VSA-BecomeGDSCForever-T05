package org.dongguk.vsa.modeul.security.controller;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.security.dto.request.ValidateAuthenticationCodeRequestDto;
import org.dongguk.vsa.modeul.security.dto.request.ValidateEmailRequestDto;
import org.dongguk.vsa.modeul.security.usecase.ValidateAuthenticationCodeUseCase;
import org.dongguk.vsa.modeul.security.usecase.ValidateEmailUseCase;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@Hidden
public class AuthController {

    private final ValidateEmailUseCase validateEmailUseCase;
    private final ValidateAuthenticationCodeUseCase validateAuthenticationCodeUseCase;

    @PostMapping("/validations/email")
    public ResponseDto<?> validateEmail(
            @RequestBody @Valid ValidateEmailRequestDto requestDto
    ) {
        return ResponseDto.ok(validateEmailUseCase.execute(requestDto));
    }

    @PostMapping("/validations/authentication-code")
    public ResponseDto<?> validateAuthenticationCode(
            @RequestBody @Valid ValidateAuthenticationCodeRequestDto requestDto
    ) {
        return ResponseDto.created(validateAuthenticationCodeUseCase.execute(requestDto));
    }
}
