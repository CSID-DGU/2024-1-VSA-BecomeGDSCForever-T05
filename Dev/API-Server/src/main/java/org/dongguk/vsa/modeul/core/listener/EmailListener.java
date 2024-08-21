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
        try {
            mailUtil.sendAuthenticationCode(
                    event.receiverAddress(),
                    event.authenticationCode()
            );
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Async
    @EventListener(classes = {ChangePasswordBySystemEvent.class})
    public void handleChangePasswordBySystemEvent(ChangePasswordBySystemEvent event) {
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
