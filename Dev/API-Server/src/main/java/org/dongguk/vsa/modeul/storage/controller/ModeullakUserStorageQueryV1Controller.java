package org.dongguk.vsa.modeul.storage.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.storage.usecase.ReadStorageBriefUsingUserAndModeullakUseCase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakUserStorageQueryV1Controller {

    private final ReadStorageBriefUsingUserAndModeullakUseCase readStorageBriefUsingUserAndModeullakUseCase;

    @GetMapping("/modeullaks/{modeullakId}/users/storages")
    public ResponseDto<?> readStorageBriefByUserAndModeullak(
            @AccountID UUID accountId,
            @PathVariable("modeullakId") Long modeullakId
    ) {
        return ResponseDto.ok(
                readStorageBriefUsingUserAndModeullakUseCase.execute(
                        accountId,
                        modeullakId
                )
        );
    }

    @GetMapping("/modeullaks/{modeullakId}/users/{userId}/storages")
    public ResponseDto<?> readStorageBriefByUserAndModeullak(
            @AccountID UUID accountId,
            @PathVariable("modeullakId") Long modeullakId,
            @PathVariable("userId") String userId
    ) {
        return ResponseDto.ok(
                readStorageBriefUsingUserAndModeullakUseCase.execute(
                        accountId,
                        modeullakId,
                        UUID.fromString(userId)
                )
        );
    }
}
