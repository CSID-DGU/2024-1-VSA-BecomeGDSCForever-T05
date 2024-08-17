package org.dongguk.vsa.modeul.security.usecase;

import org.dongguk.vsa.modeul.core.annotation.UseCase;

import java.util.UUID;

@UseCase
public interface WithdrawalUseCase {
    /**
     * 회원탈퇴 요청을 처리하는 UseCase
     * @param accountId 회원탈퇴 요청을 하는 계정의 ID
     */
    void execute(UUID accountId);
}
