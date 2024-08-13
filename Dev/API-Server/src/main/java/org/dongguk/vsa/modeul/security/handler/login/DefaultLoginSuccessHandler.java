package org.dongguk.vsa.modeul.security.handler.login;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.contants.Constants;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.core.utility.CookieUtil;
import org.dongguk.vsa.modeul.core.utility.JsonWebTokenUtil;
import org.dongguk.vsa.modeul.security.dto.response.DefaultJsonWebTokenDto;
import org.dongguk.vsa.modeul.security.info.CustomUserPrincipal;
import org.dongguk.vsa.modeul.security.usecase.LoginByDefaultUseCase;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class DefaultLoginSuccessHandler implements AuthenticationSuccessHandler {

    @Value("${web-engine.client-url}")
    private String clientUrl;

    private final LoginByDefaultUseCase loginByDefaultUseCase;

    private final ObjectMapper objectMapper;
    private final JsonWebTokenUtil jwtUtil;

    @Override
    public void onAuthenticationSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) throws IOException {
        CustomUserPrincipal principal = (CustomUserPrincipal) authentication.getPrincipal();

        DefaultJsonWebTokenDto jsonWebTokenDto = jwtUtil.generateDefaultJsonWebTokens(
                principal.getId(),
                principal.getRole()
        );

        loginByDefaultUseCase.execute(principal, jsonWebTokenDto);

        String userAgent = request.getHeader("User-Agent");

        if (userAgent != null && userAgent.contains("Mozilla")) {
            onSuccessWebResponse(response, jsonWebTokenDto);
        } else {
            onSuccessAppResponse(response, jsonWebTokenDto);
        }
    }

    private void onSuccessWebResponse(
            HttpServletResponse response,
            DefaultJsonWebTokenDto tokenDto
    ) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(HttpStatus.OK.value());

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
                (int) (jwtUtil.getRefreshTokenExpirePeriod() / 1000L)
        );

        response.sendRedirect(String.format("%s/%s", clientUrl, "profile"));
    }

    private void onSuccessAppResponse(
            HttpServletResponse response,
            DefaultJsonWebTokenDto tokenDto
    ) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        if (tokenDto == null) {
            response.setStatus(HttpStatus.NO_CONTENT.value());
        } else {
            response.setStatus(HttpStatus.CREATED.value());

            Map<String, Object> result = new HashMap<>();

            result.put("success", true);
            result.put("data", Map.of(
                            "access_token", tokenDto.getAccessToken(),
                            "refresh_token", tokenDto.getRefreshToken()
                    )
            );
            result.put("error", null);

            response.getWriter().write(objectMapper.writeValueAsString(result));
        }
    }
}
