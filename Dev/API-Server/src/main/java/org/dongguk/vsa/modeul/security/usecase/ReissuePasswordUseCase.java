package org.dongguk.vsa.modeul.security.usecase;

import org.dongguk.vsa.modeul.core.annotation.UseCase;

@UseCase
public interface ReissuePasswordUseCase {

    /**
     * temporaryToken을 이용하여 임시 비밀번호를 발급하는 유스케이스
     * @param temporaryToken 임시 비밀번호 발급을 위한 임시 토큰
     */
    void execute(String temporaryToken);
}