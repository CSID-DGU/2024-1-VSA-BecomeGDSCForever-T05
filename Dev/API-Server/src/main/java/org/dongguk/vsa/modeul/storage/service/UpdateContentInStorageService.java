package org.dongguk.vsa.modeul.storage.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.storage.domain.mongo.File;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.dongguk.vsa.modeul.storage.dto.request.UpdateContentInStorageRequestDto;
import org.dongguk.vsa.modeul.storage.repository.mongo.StorageRepository;
import org.dongguk.vsa.modeul.storage.usecase.UpdateContentInStorageUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UpdateContentInStorageService implements UpdateContentInStorageUseCase {

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final StorageRepository storageRepository;

    @Override
    public void execute(
            UUID accountId,
            String storageId,
            UpdateContentInStorageRequestDto requestDto
    ) {
        // 1. 사용자 및 저장소 정보 조회
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Storage storage = storageRepository.findById(storageId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 권한 확인
        UserModeullak userModeullak = userModeullakRepository.findWithUserAndModeullakById(storage.getUserModeullakId())
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        if (userModeullak.getModeullak().getStatus() != EModeullakStatus.STARTED) {
            throw new CommonException(ErrorCode.MODEULLAK_NOT_STARTED);
        }

        if (!userModeullak.getUser().getId().equals(user.getId())) {
            throw new CommonException(ErrorCode.ACCESS_DENIED);
        }

        // 3. 저장소가 파일이 아닐 경우 예외처리
        if (storage.getType() != EStorageType.FILE) {
            throw new CommonException(ErrorCode.INVALID_RESOURCE_TYPE);
        }

        File file = (File) storage;
        file.updateContent(requestDto.content());

        storageRepository.save(file);
    }
}
