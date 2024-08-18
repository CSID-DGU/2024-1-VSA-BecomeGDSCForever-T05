package org.dongguk.vsa.modeul.core.exception.handler;

import io.sentry.Sentry;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.SystemProperties;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class StompGlobalExceptionHandler {

    private final RabbitTemplate rabbitTemplate;

    /**
     * Stomp 전용 인증/인가 이후 Controller, Service, Repository 에서 발생하는 CommonException 예외 처리
     *
     * @param clientMessage 클라이언트 메시지
     * @param e 사용자 실수 예외
     */
    @MessageExceptionHandler(CommonException.class)
    public void handleCommonException(
            Message<byte[]> clientMessage,
            CommonException e
    ) {
        log.error("GlobalExceptionHandler catch CommonException In Stomp Processing : {}", e.getMessage());

        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(clientMessage);

        // TODO: 오류 발생 시 생길 Logic 구현해야 함
    }

    /**
     * Stomp 전용 인증/인가 이후 Controller, Service, Repository 에서 발생하는 Exception 예외 처리
     *
     * @param clientMessage 클라이언트 메시지
     * @param e 사용자 실수 예외
     */
    @MessageExceptionHandler(Exception.class)
    public void handleException(
            Message<byte[]> clientMessage,
            Exception e
    ) {
        log.error("GlobalExceptionHandler catch Exception In Stomp Processing : {}", e.getMessage());

        if (isRunningOnLocal()) {
            e.printStackTrace();
        } else {
            Sentry.captureException(e);
        }

        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(clientMessage);

        // TODO: 오류 발생 시 생길 Logic 구현해야 함
    }

    private Boolean isRunningOnLocal() {
        return SystemProperties.getProperty("spring.profiles.active") == null || SystemProperties.getProperty("spring.profiles.active").equals("local");
    }
}
