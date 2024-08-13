package org.dongguk.vsa.modeul.security.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record ValidateEmailRequestDto(
        @JsonProperty("email")
        @NotBlank(message = "이메일을 입력해주세요.")
        @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$", message = "잘못된 이메일 형식입니다.")
        String email,

        @JsonProperty("is_duplicate_check")
        @NotNull
        boolean isDuplicateCheck
) {
}
