package org.dongguk.vsa.modeul.security.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Min;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.security.domain.redis.AuthenticationCodeHistory;

@Getter
public class ValidateEmailResponseDto extends SelfValidating<ValidateEmailResponseDto> {
    @JsonProperty(namespace = "try_cnt")
    @Min(0)
    private final Integer tryCnt;

    @Builder
    public ValidateEmailResponseDto(Integer tryCnt) {
        this.tryCnt = tryCnt;

        validateSelf();
    }

    public static ValidateEmailResponseDto fromEntity(AuthenticationCodeHistory entity) {
        return ValidateEmailResponseDto.builder()
                .tryCnt(entity.getCount())
                .build();
    }
}
