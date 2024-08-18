package org.dongguk.vsa.modeul.storage.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.dongguk.vsa.modeul.storage.dto.request.CreateStorageRequestDto;
import org.dongguk.vsa.modeul.storage.usecase.CreateStorageUseCase;
import org.dongguk.vsa.modeul.storage.usecase.DeleteStorageUseCase;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.regex.Pattern;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class StorageCommandV1Controller {

    private final CreateStorageUseCase createStorageUseCase;
    private final DeleteStorageUseCase deleteStorageUseCase;

    @PostMapping("/storages")
    public ResponseDto<?> createStorage(
            @AccountID UUID accountId,
            @RequestBody @Valid CreateStorageRequestDto requestDto
    ) {
        if (EStorageType.fromString(requestDto.type()) == EStorageType.FILE && !isFileNameWhenFILE(requestDto.name())) {
            throw new CommonException(ErrorCode.INVALID_ARGUMENT);
        }

        return ResponseDto.created(createStorageUseCase.execute(accountId, requestDto));
    }

    private Boolean isFileNameWhenFILE(String name) {
        Pattern pattern = Pattern.compile("^[^/\\\\:*?\"<>|]*\\.[a-zA-Z0-9]+$");

        return pattern.matcher(name).matches();
    }

    @DeleteMapping("/storages/{storageId}")
    public ResponseDto<?> deleteStorage(
            @AccountID UUID accountId,
            @PathVariable("storageId") String storageId
    ) {
        deleteStorageUseCase.execute(accountId, storageId);

        return ResponseDto.ok(null);
    }
}
