package org.dongguk.vsa.modeul.storage.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.dongguk.vsa.modeul.storage.dto.response.StorageDetailResponseDto;
import org.dongguk.vsa.modeul.storage.repository.mongo.StorageRepository;
import org.dongguk.vsa.modeul.storage.usecase.ReadStorageUsingModeullakUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReadStorageUsingModeullakService implements ReadStorageUsingModeullakUseCase {

    private final UserRepository userRepository;
    private final ModeullakRepository modeullakRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final StorageRepository storageRepository;

    @Override
    public StorageDetailResponseDto execute(UUID accountId, Long modeullakId, String storageId) {
        // 1. 사용자 및 모들락 정보 조회
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Modeullak modeullak = modeullakRepository.findById(modeullakId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        if (modeullak.getStatus() != EModeullakStatus.STARTED) {
            throw new CommonException(ErrorCode.MODEULLAK_NOT_STARTED);
        }

        // 2. 조회할 UserModeullak 정보 조회
        if (isHavenRole(user, modeullak)) {
            throw new CommonException(ErrorCode.ACCESS_DENIED);
        }

        // 3. Storage 조회
        Storage storage = storageRepository.findById(storageId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 4. Type 확인
        if (storage.getType() == EStorageType.DIRECTORY) {
            throw new CommonException(ErrorCode.INVALID_RESOURCE_TYPE);
        }

        // 5. DTO 변환
        return StorageDetailResponseDto.fromEntity(storage);
    }

    private Boolean isHavenRole(User user, Modeullak modeullak) {
        return userModeullakRepository.findByUserAndModeullak(user, modeullak).isPresent();
    }
}
