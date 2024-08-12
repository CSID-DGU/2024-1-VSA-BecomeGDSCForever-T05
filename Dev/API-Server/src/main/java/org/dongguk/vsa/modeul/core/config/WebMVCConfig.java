package org.dongguk.vsa.modeul.core.config;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.contants.Constants;
import org.dongguk.vsa.modeul.core.interceptor.pre.HttpUserIDInterceptor;
import org.dongguk.vsa.modeul.core.resolver.HttpUserIDArgumentResolver;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
@EnableWebMvc
@RequiredArgsConstructor
public class WebMVCConfig implements WebMvcConfigurer {

    private final HttpUserIDInterceptor httpUserIDInterceptor;
    private final HttpUserIDArgumentResolver httpUserIDArgumentResolver;

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        WebMvcConfigurer.super.addArgumentResolvers(resolvers);
        resolvers.add(httpUserIDArgumentResolver);
    }

    @Override
    public void addInterceptors(final InterceptorRegistry registry) {
        registry.addInterceptor(httpUserIDInterceptor)
                .addPathPatterns("/**")
                .excludePathPatterns(Constants.NO_NEED_AUTH_URLS);
    }
}
