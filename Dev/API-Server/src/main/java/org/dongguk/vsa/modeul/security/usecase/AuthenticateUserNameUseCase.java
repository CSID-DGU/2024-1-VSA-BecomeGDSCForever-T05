package org.dongguk.vsa.modeul.security.usecase;

import org.dongguk.vsa.modeul.core.annotation.UseCase;
import org.springframework.security.core.userdetails.UserDetailsService;

@UseCase
public interface AuthenticateUserNameUseCase extends UserDetailsService {
}
