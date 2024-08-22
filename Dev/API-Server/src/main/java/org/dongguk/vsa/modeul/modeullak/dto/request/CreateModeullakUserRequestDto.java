package org.dongguk.vsa.modeul.modeullak.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record CreateModeullakUserRequestDto(
        @JsonProperty("modeullak_id")
        @NotNull
        Long modeullakId,

        @JsonProperty("participation_code")
        @Pattern(regexp = "^[a-zA-Z0-9]{6,14}$", message = "참여 코드는 6~14자리 숫자와 영문자 조합이어야 합니다.")
        String participationCode
) {
}
