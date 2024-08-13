package org.dongguk.vsa.modeul.security.usecase;

import org.dongguk.vsa.modeul.core.annotation.UseCase;
import org.dongguk.vsa.modeul.security.dto.request.SignUpByDefaultRequestDto;
import org.dongguk.vsa.modeul.security.dto.response.DefaultJsonWebTokenDto;

@UseCase
public interface SignUpByDefaultUseCase {

    /**
     * 기본 로그인 전용 회원가입 유스케이스
     * @param temporaryToken 임시 토큰
     * @param requestDto 기본 회원가입 요청 DTO
     * @return DefaultJsonWebTokenDto
     */
    DefaultJsonWebTokenDto execute(String temporaryToken, SignUpByDefaultRequestDto requestDto);
}
