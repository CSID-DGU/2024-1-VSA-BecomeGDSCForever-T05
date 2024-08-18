package org.dongguk.vsa.modeul.storage.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.dongguk.vsa.modeul.storage.dto.request.CreateStorageRequestDto;
import org.dongguk.vsa.modeul.storage.usecase.CreateStorageUsingModeullakUseCase;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.regex.Pattern;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakStorageCommandV1Controller {

    private final CreateStorageUsingModeullakUseCase createStorageUsingModeullakUseCase;

    @PostMapping("/modeullaks/{modeullakId}/storages")
    public ResponseDto<?> createStorage(
            @AccountID UUID accountId,
            @PathVariable("modeullakId") Long modeullakId,
            @RequestBody @Valid CreateStorageRequestDto requestDto
    ) {
        if (EStorageType.fromString(requestDto.type()) == EStorageType.FILE && !isFileNameWhenFILE(requestDto.name())) {
            throw new CommonException(ErrorCode.INVALID_ARGUMENT);
        }

        return ResponseDto.created(createStorageUsingModeullakUseCase.execute(accountId, modeullakId, requestDto));
    }

    private Boolean isFileNameWhenFILE(String name) {
        Pattern pattern = Pattern.compile("^[^/\\\\:*?\"<>|]*\\.[a-zA-Z0-9]+$");

        return pattern.matcher(name).matches();
    }
}
