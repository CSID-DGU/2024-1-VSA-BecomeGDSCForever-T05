package org.dongguk.vsa.modeul.core.contants;

import java.util.List;

public class Constants {

    // JWT
    public static String USER_ID_ATTRIBUTE_NAME = "USER_ID";
    public static String USER_ID_CLAIM_NAME = "uid";
    public static String USER_ROLE_CLAIM_NAME = "rol";

    // HEADER
    public static String BEARER_PREFIX = "Bearer ";
    public static String AUTHORIZATION_HEADER = "Authorization";

    // COOKIE
    public static String ACCESS_TOKEN = "access_token";
    public static String REFRESH_TOKEN = "refresh_token";

    /**
     * 인증이 필요 없는 URL
     */
    public static List<String> NO_NEED_AUTH_URLS = List.of(

            // Auth
            "/auth/validations/email",
            "/auth/validations/authentication-code",

            "/auth/reissue/token",
            "/auth/reissue/password",

            "/auth/sign-up",

            "/auth/login",

            // Swagger
            "/api-docs.html",
            "/api-docs/**",
            "/swagger-ui/**",
            "/v3/**",

            // Drug
            "/v1/drugs/**"
    );

    /**
     * Swagger에서 사용하는 URL
     */
    public static List<String> SWAGGER_URLS = List.of(
            "/api-docs.html",
            "/api-docs",
            "/swagger-ui",
            "/v3"
    );

    /**
     * 사용자 URL
     */
    public static List<String> USER_URLS = List.of(
            "/api/v1/**");
}
