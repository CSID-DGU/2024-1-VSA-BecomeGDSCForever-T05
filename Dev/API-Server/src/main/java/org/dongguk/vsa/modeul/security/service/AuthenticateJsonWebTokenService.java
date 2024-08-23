package org.dongguk.vsa.modeul.security.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.security.domain.mysql.Account;
import org.dongguk.vsa.modeul.security.info.CustomUserPrincipal;
import org.dongguk.vsa.modeul.security.repository.mysql.AccountRepository;
import org.dongguk.vsa.modeul.security.usecase.AuthenticateJsonWebTokenUseCase;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthenticateJsonWebTokenService implements AuthenticateJsonWebTokenUseCase {

    private final AccountRepository accountRepository;

    @Override
    public CustomUserPrincipal execute(UUID accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));

        return CustomUserPrincipal.create(account);
    }
}
