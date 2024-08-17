package org.dongguk.vsa.modeul.core.contants;

import java.util.List;

public class Constants {

    // JWT
    public static String ACCOUNT_ID_ATTRIBUTE_NAME = "ACCOUNT_ID";
    public static String ACCOUNT_ID_CLAIM_NAME = "aid";
    public static String ACCOUNT_ROLE_CLAIM_NAME = "rol";

    // HEADER
    public static String BEARER_PREFIX = "Bearer ";
    public static String AUTHORIZATION_HEADER = "Authorization";

    // COOKIE
    public static String ACCESS_TOKEN = "access_token";
    public static String REFRESH_TOKEN = "refresh_token";

    // RABBIT MQ
    public static final String MODEUL_EXCHANGE_NAME = "modeul.exchange";

    public static final String MODEUL_USER_QUEUE_NAME = "user.queue";
    public static final String MODEUL_DIALOGUE_QUEUE_NAME = "dialogue.queue";
    public static final String MODEUL_STORAGE_QUEUE_NAME = "storage.queue";

    public static final String MODEULLAK_DIALOGUE_ROUTING_KEY = "modeullaks.*.dialogues";
    public static final String MODEULLAK_STORAGE_CONTENT_ROUTING_KEY = "modeullaks.*.storages.*.content";
    public static final String MODEULLAK_USER_ROUTING_KEY = "modeullaks.*.users";
    public static final String MODEULLAK_USER_STORAGE_ROUTING_KEY = "modeullaks.*.users.*.storages";
    public static final String MODEULLAK_USER_DIALOGUE_ROUTING_KEY = "modeullaks.*.users.*.dialogues";

    /**
     * 인증이 필요 없는 URL
     */
    public static List<String> NO_NEED_AUTH_URLS = List.of(
            // Health Check
            "/ws-stomp",

            // Stomp
            "/pub",
            "/exchange",

            // Authentication/Authorization
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
            "/v3/**"
    );

    /**
     * Swagger 에서 사용하는 URL
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
            "/v1/**"
    );
}
