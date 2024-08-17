package org.dongguk.vsa.modeul.core.exception.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;

@Getter
@RequiredArgsConstructor
public class HttpCommonException extends RuntimeException {

    private final ErrorCode errorCode;

    @Override
    public String getMessage() {
        return errorCode.getMessage();
    }
}
