package org.dongguk.vsa.modeul.security.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.security.dto.request.ValidateAuthenticationCodeRequestDto;
import org.dongguk.vsa.modeul.security.dto.response.TemporaryJsonWebTokenDto;

@UseCase
public interface ValidateAuthenticationCodeUseCase {

    /**
     * 이메일 인증 코드 발급
     * @param requestDto 이메일 인증 요청 DTO
     * @return 이메일 인증 응답 DTO
     */
    TemporaryJsonWebTokenDto execute(ValidateAuthenticationCodeRequestDto requestDto);
}
