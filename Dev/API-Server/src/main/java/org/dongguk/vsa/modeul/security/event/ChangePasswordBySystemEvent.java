package org.dongguk.vsa.modeul.security.event;

import lombok.Builder;

@Builder
public record ChangePasswordBySystemEvent(
        String receiverAddress,
        String temporaryPassword
) {
}
