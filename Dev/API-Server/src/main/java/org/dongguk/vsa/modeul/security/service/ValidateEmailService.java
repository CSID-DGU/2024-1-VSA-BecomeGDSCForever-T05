package org.dongguk.vsa.modeul.security.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.core.utility.PasswordUtil;
import org.dongguk.vsa.modeul.security.domain.redis.AuthenticationCode;
import org.dongguk.vsa.modeul.security.domain.redis.AuthenticationCodeHistory;
import org.dongguk.vsa.modeul.security.domain.type.ESecurityProvider;
import org.dongguk.vsa.modeul.security.dto.request.ValidateEmailRequestDto;
import org.dongguk.vsa.modeul.security.dto.response.ValidateEmailResponseDto;
import org.dongguk.vsa.modeul.security.event.CompleteEmailValidationEvent;
import org.dongguk.vsa.modeul.security.repository.mysql.AccountRepository;
import org.dongguk.vsa.modeul.security.repository.redis.AuthenticationCodeHistoryRepository;
import org.dongguk.vsa.modeul.security.repository.redis.AuthenticationCodeRepository;
import org.dongguk.vsa.modeul.security.usecase.ValidateEmailUseCase;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ValidateEmailService implements ValidateEmailUseCase {

    private final AccountRepository accountRepository;

    private final AuthenticationCodeRepository authenticationCodeRepository;
    private final AuthenticationCodeHistoryRepository authenticationCodeHistoryRepository;

    private final ApplicationEventPublisher applicationEventPublisher;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public ValidateEmailResponseDto execute(ValidateEmailRequestDto requestDto) {
        if (requestDto.isDuplicateCheck() && isDuplicatedEmail(requestDto.email())) {
            throw new CommonException(ErrorCode.DUPLICATED_RESOURCE);
        }

        // 인증코드 발급 이력 조회
        AuthenticationCodeHistory history = authenticationCodeHistoryRepository.findById(requestDto.email())
                .orElse(null);

        // 인증코드 발급 제한 확인
        if (isBlockedIssuingAuthenticationCode(history)) {
            throw new CommonException(ErrorCode.TOO_MANY_AUTHENTICATION_CODE_REQUESTS);
        }

        // 인증코드 발급 속도 제한 확인(1분 이내에 재요청 했을 경우)
        if (isTooFastIssuingAuthenticationCode(history)) {
            throw new CommonException(ErrorCode.TOO_FAST_AUTHENTICATION_CODE_REQUESTS);
        }

        // 새로운 인증코드 생성
        String code = PasswordUtil.generateAuthCode(6);
        AuthenticationCode authenticationCode = authenticationCodeRepository.save(
                AuthenticationCode.builder()
                        .email(requestDto.email())
                        .value(bCryptPasswordEncoder.encode(code))
                        .build()
        );

        // 인증코드 발급 이력 업데이트
        if (history == null) {
            history = authenticationCodeHistoryRepository.save(
                    AuthenticationCodeHistory.builder()
                            .email(requestDto.email())
                            .count(1)
                            .build()
            );
        } else {
            history = authenticationCodeHistoryRepository.save(history.copyWith(history.getCount() + 1));
        }

        // 메일 전송(비동기)
        applicationEventPublisher.publishEvent(CompleteEmailValidationEvent.builder()
                .receiverAddress(requestDto.email())
                .authenticationCode(code)
                .build());

        return ValidateEmailResponseDto.fromEntity(history);

    }

    /**
     * 중복된 이메일인지 확인
     * @param email 이메일
     * @return 중복된 이메일인지 여부
     */
    private Boolean isDuplicatedEmail(String email) {
        return accountRepository.findBySerialIdAndProvider(email, ESecurityProvider.DEFAULT).isPresent();
    }

    /**
     * 인증코드 발급을 막은 사용자인지 확인
     * @param history 인증코드 발급 이력
     * @return 인증코드 발급을 막은 사용자인지 여부
     */
    private Boolean isBlockedIssuingAuthenticationCode(AuthenticationCodeHistory history) {
        if (history == null) {
            return false;
        }

        return history.getCount() >= 5;
    }

    /**
     * 인증코드 발급 속도가 너무 빠른지 확인
     * @param history 인증코드 발급 이력
     * @return 인증코드 발급 속도가 너무 빠른지 여부
     */
    private Boolean isTooFastIssuingAuthenticationCode(AuthenticationCodeHistory history) {
        if (history == null) {
            return false;
        }

        return history.getLastSentAt().isAfter(LocalDateTime.now().minusMinutes(1));
    }
}
