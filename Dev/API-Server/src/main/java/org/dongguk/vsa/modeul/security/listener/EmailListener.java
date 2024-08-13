package org.dongguk.vsa.modeul.security.listener;

import lombok.extern.slf4j.Slf4j;
import org.dongguk.vsa.modeul.security.event.ChangePasswordBySystemEvent;
import org.dongguk.vsa.modeul.security.event.CompleteEmailValidationEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class EmailListener {

    @Async
    @EventListener(classes = {CompleteEmailValidationEvent.class})
    public void handleCompleteEmailValidationEvent(CompleteEmailValidationEvent event) {
        // TODO: 이후 이메일 연동 필요함
        log.info(
                "[ 이메일 인증 완료 이벤트 처리 ]\n{}\n{}",
                event.receiverAddress() + "님의 이메일 인증이 완료되었습니다.",
                "인증코드는 " + event.authenticationCode() + " 입니다."
        );
    }

    @Async
    @EventListener(classes = {ChangePasswordBySystemEvent.class})
    public void handleChangePasswordBySystemEvent(ChangePasswordBySystemEvent event) {
        // TODO: 이후 이메일 연동 필요함
        log.info(
                "[ 이메일 인증 완료 이벤트 처리 ]\n{}\n{}",
                event.receiverAddress() + "님의 임시 비밀번호가 발급되었습니다.",
                "임시 비밀번호는 " + event.temporaryPassword() + " 입니다."
        );
    }
}
