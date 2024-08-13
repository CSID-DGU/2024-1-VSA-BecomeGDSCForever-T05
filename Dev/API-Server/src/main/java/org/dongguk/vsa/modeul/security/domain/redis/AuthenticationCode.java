package org.dongguk.vsa.modeul.security.domain.redis;

import jakarta.persistence.Column;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@RedisHash(value = "authentication_code", timeToLive = 60 * 3)
public class AuthenticationCode {
    @Id
    @Column(name = "serial_email")
    private String serialEmail;

    @Column(name = "value")
    private String value;

    @Builder
    public AuthenticationCode(String serialEmail, String value) {
        this.serialEmail = serialEmail;
        this.value = value;
    }
}
