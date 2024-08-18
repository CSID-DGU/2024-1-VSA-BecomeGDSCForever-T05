package org.dongguk.vsa.modeul.security.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.security.dto.response.DefaultJsonWebTokenDto;
import org.dongguk.vsa.modeul.security.info.CustomUserPrincipal;

@UseCase
public interface LoginByDefaultUseCase {

    /**
     * Security에서 사용되는 Login 유스케이스
     * @param principal UserPrincipal
     * @param jsonWebTokenDto DefaultJsonWebTokenDto
     */
    void execute(CustomUserPrincipal principal, DefaultJsonWebTokenDto jsonWebTokenDto);
}
