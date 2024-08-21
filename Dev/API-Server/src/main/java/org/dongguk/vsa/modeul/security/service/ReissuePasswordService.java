package org.dongguk.vsa.modeul.security.service;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.contants.Constants;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.core.utility.JsonWebTokenUtil;
import org.dongguk.vsa.modeul.core.utility.PasswordUtil;
import org.dongguk.vsa.modeul.security.domain.mysql.Account;
import org.dongguk.vsa.modeul.security.domain.redis.TemporaryToken;
import org.dongguk.vsa.modeul.security.domain.type.ESecurityProvider;
import org.dongguk.vsa.modeul.security.event.ChangePasswordBySystemEvent;
import org.dongguk.vsa.modeul.security.repository.mysql.AccountRepository;
import org.dongguk.vsa.modeul.security.repository.redis.TemporaryTokenRepository;
import org.dongguk.vsa.modeul.security.usecase.ReissuePasswordUseCase;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReissuePasswordService implements ReissuePasswordUseCase {

    private final AccountRepository accountRepository;

    private final TemporaryTokenRepository temporaryTokenRepository;

    private final JsonWebTokenUtil jsonWebTokenUtil;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ApplicationEventPublisher applicationEventPublisher;

    @Override
    @Transactional
    public void execute(String temporaryToken) {
        // Temporary Token 검증
        Claims claims = jsonWebTokenUtil.validateToken(temporaryToken);

        // Serial Email 추출
        String serialId = claims.get(Constants.ACCOUNT_ID_CLAIM_NAME, String.class);

        // Temporary Token 존재 여부 확인
        if (!isEqualsTemporaryToken(serialId, temporaryToken)) {
            throw new CommonException(ErrorCode.INVALID_TOKEN_ERROR);
        }

        // 계정 조회
        Account account = accountRepository.findBySerialIdAndProvider(serialId, ESecurityProvider.DEFAULT)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));

        // 임시 비밀번호 생성 및 저장
        String temporaryPassword = PasswordUtil.generatePassword(8);
        account.updatePassword(bCryptPasswordEncoder.encode(temporaryPassword));

        // 메일 전송(비동기)
        applicationEventPublisher.publishEvent(ChangePasswordBySystemEvent.builder()
                .receiverAddress(serialId)
                .temporaryPassword(temporaryPassword)
                .build()
        );
    }

    /**
     * Temporary Token 일치 여부 확인
     * @param serialId Serial ID
     * @param temporaryToken Temporary Token
     * @return Redis에 저장된 Temporary Token과 일치 여부
     */
    private Boolean isEqualsTemporaryToken(String serialId, String temporaryToken) {
        if (serialId == null) {
            return false;
        }

        TemporaryToken temporaryTokenEntity = temporaryTokenRepository.findById(serialId)
                .orElseThrow(() -> new CommonException(ErrorCode.INVALID_TOKEN_ERROR));

        return temporaryTokenEntity.getValue().equals(temporaryToken);
    }
}