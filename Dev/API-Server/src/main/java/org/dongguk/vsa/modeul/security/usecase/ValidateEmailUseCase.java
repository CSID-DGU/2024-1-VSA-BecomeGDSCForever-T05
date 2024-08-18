package org.dongguk.vsa.modeul.security.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.security.dto.request.ValidateEmailRequestDto;
import org.dongguk.vsa.modeul.security.dto.response.ValidateEmailResponseDto;

@UseCase
public interface ValidateEmailUseCase {

    /**
     * 이메일 인증 코드 발급
     * @param requestDto 이메일 인증 요청 DTO
     * @return 이메일 인증 응답 DTO
     */
    ValidateEmailResponseDto execute(ValidateEmailRequestDto requestDto);
}
