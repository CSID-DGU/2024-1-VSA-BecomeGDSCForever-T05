package org.dongguk.vsa.modeul.storage.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.dongguk.vsa.modeul.storage.dto.request.CreateStorageRequestDto;
import org.dongguk.vsa.modeul.storage.dto.request.UpdateContentInStorageRequestDto;
import org.dongguk.vsa.modeul.storage.dto.request.UpdateNameInStorageRequestDto;
import org.dongguk.vsa.modeul.storage.usecase.CreateStorageUseCase;
import org.dongguk.vsa.modeul.storage.usecase.DeleteStorageUseCase;
import org.dongguk.vsa.modeul.storage.usecase.UpdateContentInStorageUseCase;
import org.dongguk.vsa.modeul.storage.usecase.UpdateNameInStorageUseCase;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.regex.Pattern;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class StorageCommandV1Controller {

    private final CreateStorageUseCase createStorageUseCase;
    private final DeleteStorageUseCase deleteStorageUseCase;

    private final UpdateNameInStorageUseCase updateNameInStorageUseCase;
    private final UpdateContentInStorageUseCase updateContentInStorageUseCase;

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

    @PutMapping("/storages/{storageId}/name")
    public ResponseDto<?> updateNameInStorage(
            @AccountID UUID accountId,
            @PathVariable("storageId") String storageId,
            @RequestBody @Valid UpdateNameInStorageRequestDto requestDto
    ) {
        updateNameInStorageUseCase.execute(accountId, storageId, requestDto);

        return ResponseDto.ok(null);
    }

    @PutMapping("/storages/{storageId}/content")
    public ResponseDto<?> updateContentInStorage(
            @AccountID UUID accountId,
            @PathVariable("storageId") String storageId,
            @RequestBody @Valid UpdateContentInStorageRequestDto requestDto
    ) {
        updateContentInStorageUseCase.execute(accountId, storageId, requestDto);

        return ResponseDto.ok(null);
    }

    @DeleteMapping("/storages/{storageId}")
    public ResponseDto<?> deleteStorage(
            @AccountID UUID accountId,
            @PathVariable("storageId") String storageId
    ) {
        deleteStorageUseCase.execute(accountId, storageId);

        return ResponseDto.noContent();
    }

    private Boolean isFileNameWhenFILE(String name) {
        Pattern pattern = Pattern.compile("^[^/\\\\:*?\"<>|]*\\.[a-zA-Z0-9]+$");

        return pattern.matcher(name).matches();
    }
}
