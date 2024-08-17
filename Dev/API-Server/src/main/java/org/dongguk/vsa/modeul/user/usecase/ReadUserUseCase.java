package org.dongguk.vsa.modeul.user.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;

import java.util.UUID;

@UseCase
public interface ReadUserUseCase {

    /**
     * 사용자를 조회하는 UseCase
     * @param userId 사용자 식별자
     * @return 사용자 정보
     */
    String execute(UUID userId);
}
