package org.dongguk.vsa.modeul.core.listener;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.SystemProperties;
import org.dongguk.vsa.modeul.core.utility.MailUtil;
import org.dongguk.vsa.modeul.security.event.ChangePasswordBySystemEvent;
import org.dongguk.vsa.modeul.security.event.CompleteEmailValidationEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class EmailListener {

    private final MailUtil mailUtil;

    @Async
    @EventListener(classes = {CompleteEmailValidationEvent.class})
    public void handleCompleteEmailValidationEvent(CompleteEmailValidationEvent event) {
        if (isRunningOnLocal()) {
            log.info(
                    "\n----------------------------------\n[ 이메일 인증 완료 이벤트 처리 ]\n{}\n{}\n----------------------------------",
                    event.receiverAddress() + "님의 이메일 인증이 완료되었습니다.",
                    "인증코드는 " + event.authenticationCode() + " 입니다."
            );
        } else {
            try {
                mailUtil.sendAuthenticationCode(
                        event.receiverAddress(),
                        event.authenticationCode()
                );
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @Async
    @EventListener(classes = {ChangePasswordBySystemEvent.class})
    public void handleChangePasswordBySystemEvent(ChangePasswordBySystemEvent event) {
        if (isRunningOnLocal()) {
            log.info(
                    "\n----------------------------------\n[ 임시 비밀번호 발급 이벤트 처리 ]\n{}\n{}\n----------------------------------",
                    event.receiverAddress() + "님의 임시 비밀번호가 발급되었습니다.",
                    "임시 비밀번호는 " + event.temporaryPassword() + " 입니다."
            );
        } else {
            try {
                mailUtil.sendTemporaryPassword(
                        event.receiverAddress(),
                        event.temporaryPassword()
                );
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private Boolean isRunningOnLocal() {
        return SystemProperties.getProperty("spring.profiles.active") == null || SystemProperties.getProperty("spring.profiles.active").equals("local");
    }
}
