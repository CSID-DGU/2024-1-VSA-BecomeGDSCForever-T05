package org.dongguk.vsa.modeul.security.domain.redis;

import jakarta.persistence.Column;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@RedisHash(value = "authentication_code_history", timeToLive = 60 * 30)
public class AuthenticationCodeHistory {
    @Id
    @Column(name = "serial_email")
    private String serialEmail;

    @Column(name = "count")
    private Integer count;

    @Column(name = "last_sent_at")
    private LocalDateTime lastSentAt;

    @Builder
    public AuthenticationCodeHistory(
            String serialEmail,
            Integer count
    ) {
        this.serialEmail = serialEmail;
        this.count = count;

        this.lastSentAt = LocalDateTime.now();
    }

    public AuthenticationCodeHistory copyWith(Integer count) {
        return AuthenticationCodeHistory.builder()
                .serialEmail(this.serialEmail)
                .count(count)
                .build();
    }
}
