package org.dongguk.vsa.modeul.modeullak.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.modeullak.dto.request.CreateModeullakUserRequestDto;
import org.dongguk.vsa.modeul.modeullak.usecase.CreateModeullakUserUseCase;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakUserListUseCase;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakUserQueryV1Controller {

    private final ReadModeullakUserListUseCase readModeullakUserListUseCase;

    @GetMapping("/modeullaks/{modeullakId}/users/briefs")
    public ResponseDto<?> readModeullakUsers(
            @AccountID UUID accountId,
            @PathVariable Long modeullakId
    ) {
        return ResponseDto.ok(readModeullakUserListUseCase.execute(accountId, modeullakId));
    }
}
