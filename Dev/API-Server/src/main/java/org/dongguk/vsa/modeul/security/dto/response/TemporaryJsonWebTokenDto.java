package org.dongguk.vsa.modeul.security.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;

@Getter
public class TemporaryJsonWebTokenDto extends SelfValidating<TemporaryJsonWebTokenDto> {
    @JsonProperty("temporary_token")
    @NotBlank
    private final String temporaryToken;

    @Builder
    public TemporaryJsonWebTokenDto(String temporaryToken) {
        this.temporaryToken = temporaryToken;
        this.validateSelf();
    }
}
