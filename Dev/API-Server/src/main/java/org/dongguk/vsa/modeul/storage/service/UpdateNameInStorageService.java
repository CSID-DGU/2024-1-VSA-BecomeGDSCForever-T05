package org.dongguk.vsa.modeul.storage.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.storage.domain.mongo.Directory;
import org.dongguk.vsa.modeul.storage.domain.mongo.File;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.dongguk.vsa.modeul.storage.dto.request.CreateStorageRequestDto;
import org.dongguk.vsa.modeul.storage.dto.request.UpdateNameInStorageRequestDto;
import org.dongguk.vsa.modeul.storage.repository.mongo.StorageRepository;
import org.dongguk.vsa.modeul.storage.usecase.UpdateNameInStorageUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class UpdateNameInStorageService implements UpdateNameInStorageUseCase {

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final StorageRepository storageRepository;

    @Override
    public void execute(
            UUID accountId,
            String storageId,
            UpdateNameInStorageRequestDto requestDto
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

        // 3. 저장소가 파일일 경우 예외처리(.이 하나라도 존재)
        if (storage.getType() == EStorageType.FILE && !isFileNameWhenFILE(requestDto.name())) {
            throw new CommonException(ErrorCode.INVALID_ARGUMENT);
        }

        storage.updateName(requestDto.name());

        storageRepository.save(storage);

        // TODO: 4. Update Storage Event 발생
    }

    private Boolean isFileNameWhenFILE(String name) {
        Pattern pattern = Pattern.compile("^[^/\\\\:*?\"<>|]*\\.[a-zA-Z0-9]+$");

        return pattern.matcher(name).matches();
    }
}
