package org.dongguk.vsa.modeul.core.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.handler.invocation.HandlerMethodArgumentResolver;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.server.standard.ServletServerContainerFactoryBean;

import java.util.List;

@EnableWebSocket
@EnableWebSocketMessageBroker
@RequiredArgsConstructor
@Configuration
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Value("${spring.rabbitmq.host}")
    private String rabbitHost;

    @Value("${spring.rabbitmq.port}")
    private Integer rabbitPort;

    @Value("${spring.rabbitmq.username}")
    private String rabbitUsername;

    @Value("${spring.rabbitmq.password}")
    private String rabbitPassword;

    @Bean
    public ServletServerContainerFactoryBean configureWebSocketContainer() {
        ServletServerContainerFactoryBean factory = new ServletServerContainerFactoryBean();
        factory.setMaxSessionIdleTimeout(3 * 60 * 1000L); // 3분
        factory.setAsyncSendTimeout(5 * 1000L); // 5초

        return factory;
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config
                .setPathMatcher(new AntPathMatcher("."))
                .setApplicationDestinationPrefixes("/deprecated-pub")
                .enableStompBrokerRelay("/exchange")
                .setRelayHost(rabbitHost)
                .setRelayPort(rabbitPort)
                .setSystemLogin(rabbitUsername)
                .setSystemPasscode(rabbitPassword)
                .setClientLogin(rabbitUsername)
                .setClientPasscode(rabbitPassword)
                .setVirtualHost("/");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws-stomp")
                .setAllowedOriginPatterns("*"); // TODO: 개발 전용이므로 추후에 수정 필요

        // TODO: CRDT 개발 시 StompSecurityExceptionHandler 추가
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        // TODO: CRDT 개발 시 StompAuthenticationInterceptor, StompAuthorizationInterceptor, StompAccountIdInterceptor 추가
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        // TODO: CRDT 개발 시 StompUserIdArgumentResolver 추가
    }
}
