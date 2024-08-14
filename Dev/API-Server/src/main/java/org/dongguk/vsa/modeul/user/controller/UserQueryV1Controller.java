package org.dongguk.vsa.modeul.user.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.user.usecase.ReadUserUseCase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class UserQueryV1Controller {

    private final ReadUserUseCase readUserUseCase;

    @GetMapping("/users")
    public String getUsers() {
        return readUserUseCase.execute(null);
    }
}
