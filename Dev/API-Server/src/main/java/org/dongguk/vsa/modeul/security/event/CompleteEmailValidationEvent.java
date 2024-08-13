package org.dongguk.vsa.modeul.security.event;

import lombok.Builder;

@Builder
public record CompleteEmailValidationEvent(
        String receiverAddress,
        String authenticationCode
) {
}
