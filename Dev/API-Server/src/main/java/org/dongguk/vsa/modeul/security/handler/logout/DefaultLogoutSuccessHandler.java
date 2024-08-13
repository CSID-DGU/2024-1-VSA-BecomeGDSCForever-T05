package org.dongguk.vsa.modeul.security.handler.logout;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.contants.Constants;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.utility.CookieUtil;
import org.dongguk.vsa.modeul.security.handler.common.AbstractFailureHandler;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class DefaultLogoutSuccessHandler
        extends AbstractFailureHandler implements LogoutSuccessHandler {

    private final ObjectMapper objectMapper;

    @Override
    public void onLogoutSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) throws IOException {
        if (authentication == null) {
            setErrorResponse(response, refineErrorCode(request));
            return;
        }

        // User-Agent 헤더를 통해 요청이 브라우저에서 온 것인지 확인
        String userAgent = request.getHeader("User-Agent");

        // 브라우저에서 온 요청인 경우 쿠키를 삭제함
        if (userAgent != null && userAgent.contains("Mozilla")) {
            CookieUtil.deleteCookie(request, response, Constants.ACCESS_TOKEN);
            CookieUtil.deleteCookie(request, response, Constants.REFRESH_TOKEN);
            CookieUtil.deleteCookie(request, response, "JSESSIONID");
        }

        setSuccessResponse(response);
    }

    private ErrorCode refineErrorCode(HttpServletRequest request) {
        if (request.getAttribute("exception") == null) {
            return ErrorCode.INTERNAL_SERVER_ERROR;
        }

        return (ErrorCode) request.getAttribute("exception");
    }

    private void setSuccessResponse(HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(HttpStatus.OK.value());

        Map<String, Object> result = new HashMap<>();
        result.put("success", true);
        result.put("data", null);
        result.put("error", null);

        response.getWriter().write(objectMapper.writeValueAsString(result));
    }
}
