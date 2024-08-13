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
import org.dongguk.vsa.modeul.core.utility.CookieUtil;
import org.dongguk.vsa.modeul.core.utility.HeaderUtil;
import org.dongguk.vsa.modeul.core.utility.JsonWebTokenUtil;
import org.dongguk.vsa.modeul.security.dto.request.SignUpByDefaultRequestDto;
import org.dongguk.vsa.modeul.security.dto.request.ValidateAuthenticationCodeRequestDto;
import org.dongguk.vsa.modeul.security.dto.request.ValidateEmailRequestDto;
import org.dongguk.vsa.modeul.security.dto.response.DefaultJsonWebTokenDto;
import org.dongguk.vsa.modeul.security.usecase.*;
import org.springframework.beans.factory.annotation.Value;
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

    @Value("${web-engine.client-url}")
    private String clientUrl;

    private final SignUpByDefaultUseCase signUpByDefaultUseCase;
    private final WithdrawalUseCase withdrawalUseCase;
    private final ReissuePasswordUseCase reissuePasswordUseCase;
    private final ReissueJsonWebTokenUseCase reissueJsonWebTokenUseCase;

    private final ValidateEmailUseCase validateEmailUseCase;
    private final ValidateAuthenticationCodeUseCase validateAuthenticationCodeUseCase;

    private final JsonWebTokenUtil jsonWebTokenUtil;

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
            HttpServletRequest request,
            HttpServletResponse response,
            @AccountID UUID accountId
    ) {
        // 회원 탈퇴
        withdrawalUseCase.execute(accountId);

        // User-Agent 헤더를 통해 요청이 브라우저에서 온 것인지 확인
        String userAgent = request.getHeader("User-Agent");

        // 브라우저에서 온 요청인 경우 쿠키를 삭제함
        if (userAgent != null && userAgent.contains("Mozilla")) {
            CookieUtil.deleteCookie(request, response, Constants.ACCESS_TOKEN);
            CookieUtil.deleteCookie(request, response, Constants.REFRESH_TOKEN);
            CookieUtil.deleteCookie(request, response, "JSESSIONID");
        }

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
        // User-Agent 헤더를 통해 요청이 브라우저에서 온 것인지 확인
        String userAgent = request.getHeader("User-Agent");
        String refreshToken;

        // 브라우저에서 온 요청인 경우 쿠키에서 토큰을 가져오고 아닌 경우 헤더에서 토큰을 가져옴
        if (userAgent != null && userAgent.contains("Mozilla")) {
            refreshToken = CookieUtil.refineCookie(request, Constants.REFRESH_TOKEN)
                    .orElseThrow(() -> new HttpCommonException(ErrorCode.INVALID_HEADER_ERROR));
        } else {
            refreshToken = HeaderUtil.refineHeader(request, Constants.AUTHORIZATION_HEADER, Constants.BEARER_PREFIX)
                    .orElseThrow(() -> new HttpCommonException(ErrorCode.INVALID_HEADER_ERROR));
        }

        DefaultJsonWebTokenDto tokenDto = reissueJsonWebTokenUseCase.execute(refreshToken);

        // 브라우저에서 온 요청인 경우 쿠키에 토큰을 저장하고 아닌 경우 토큰을 반환
        if (userAgent != null && userAgent.contains("Mozilla")) {
            CookieUtil.addCookie(
                    response,
                    clientUrl,
                    Constants.ACCESS_TOKEN,
                    tokenDto.getAccessToken()
            );
            CookieUtil.addSecureCookie(
                    response,
                    clientUrl,
                    Constants.REFRESH_TOKEN,
                    tokenDto.getRefreshToken(),
                    (int) (jsonWebTokenUtil.getRefreshTokenExpirePeriod() / 1000L)
            );

            return ResponseDto.ok(null);
        } else {
            return ResponseDto.ok(tokenDto);
        }
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
