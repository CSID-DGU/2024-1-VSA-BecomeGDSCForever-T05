package org.dongguk.vsa.modeul.security.controller;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.AccountID;
import org.dongguk.vsa.modeul.core.contants.Constants;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.HttpCommonException;
import org.dongguk.vsa.modeul.core.utility.HeaderUtil;
import org.dongguk.vsa.modeul.security.dto.request.SignUpByDefaultRequestDto;
import org.dongguk.vsa.modeul.security.dto.request.ValidateAuthenticationCodeRequestDto;
import org.dongguk.vsa.modeul.security.dto.request.ValidateEmailRequestDto;
import org.dongguk.vsa.modeul.security.usecase.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@Hidden
public class AuthController {

    private final SignUpByDefaultUseCase signUpByDefaultUseCase;
    private final WithdrawalUseCase withdrawalUseCase;
    private final ReissuePasswordUseCase reissuePasswordUseCase;
    private final ReissueJsonWebTokenUseCase reissueJsonWebTokenUseCase;

    private final ValidateEmailUseCase validateEmailUseCase;
    private final ValidateAuthenticationCodeUseCase validateAuthenticationCodeUseCase;

    @PostMapping("/sign-up")
    public ResponseDto<?> signUp(
            HttpServletRequest request,
            @RequestBody @Valid SignUpByDefaultRequestDto requestDto
    ) {
        String temporaryToken = HeaderUtil.refineHeader(request, Constants.AUTHORIZATION_HEADER, Constants.BEARER_PREFIX)
                .orElseThrow(() -> new HttpCommonException(ErrorCode.INVALID_HEADER_ERROR));

        return ResponseDto.created(signUpByDefaultUseCase.execute(temporaryToken, requestDto));
    }

    @PostMapping("/withdrawal")
    public ResponseDto<?> withdrawal(
            @AccountID UUID accountId
    ) {
        withdrawalUseCase.execute(accountId);

        return ResponseDto.noContent();
    }

    @PostMapping("/reissue/password")
    public ResponseDto<?> reissuePassword(
            HttpServletRequest request
    ) {
        String temporaryToken = HeaderUtil.refineHeader(request, Constants.AUTHORIZATION_HEADER, Constants.BEARER_PREFIX)
                .orElseThrow(() -> new HttpCommonException(ErrorCode.INVALID_HEADER_ERROR));

        reissuePasswordUseCase.execute(temporaryToken);

        return ResponseDto.ok(null);
    }

    @PostMapping("/reissue/token")
    public ResponseDto<?> reissueDefaultJsonWebToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) {
        String refreshToken = HeaderUtil.refineHeader(request, Constants.AUTHORIZATION_HEADER, Constants.BEARER_PREFIX)
                .orElseThrow(() -> new HttpCommonException(ErrorCode.INVALID_HEADER_ERROR));

        return ResponseDto.created(reissueJsonWebTokenUseCase.execute(refreshToken));
    }

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
