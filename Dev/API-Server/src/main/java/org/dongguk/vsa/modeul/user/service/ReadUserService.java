package org.dongguk.vsa.modeul.user.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.user.repository.UserRepository;
import org.dongguk.vsa.modeul.user.usecase.ReadUserUseCase;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReadUserService implements ReadUserUseCase {

    private final UserRepository userRepository;

    @Override
    public String execute(UUID userId) {
        return "Hello World!";
    }
}
