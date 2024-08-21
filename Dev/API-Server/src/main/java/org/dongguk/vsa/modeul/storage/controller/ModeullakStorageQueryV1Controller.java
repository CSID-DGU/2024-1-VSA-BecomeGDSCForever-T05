package org.dongguk.vsa.modeul.storage.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.storage.usecase.ReadStorageUsingModeullakUseCase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakStorageQueryV1Controller {

    private final ReadStorageUsingModeullakUseCase readStorageUsingModeullakUseCase;

    @GetMapping("/modeullaks/{modeullakId}/storages/{storageId}")
    public ResponseDto<?> readStorage(
            @AccountID UUID accountId,
            @PathVariable Long modeullakId,
            @PathVariable String storageId
    ) {
        return ResponseDto.ok(readStorageUsingModeullakUseCase.execute(accountId, modeullakId, storageId));
    }
}
