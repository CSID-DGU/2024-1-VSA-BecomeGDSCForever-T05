package org.dongguk.vsa.modeul.storage.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.storage.domain.mongo.Directory;
import org.dongguk.vsa.modeul.storage.domain.mongo.File;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.dongguk.vsa.modeul.storage.dto.request.CreateStorageRequestDto;
import org.dongguk.vsa.modeul.storage.dto.response.CreateStorageResponseDto;
import org.dongguk.vsa.modeul.storage.repository.mongo.StorageRepository;
import org.dongguk.vsa.modeul.storage.usecase.CreateStorageUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CreateStorageService implements CreateStorageUseCase {

    private final UserRepository userRepository;
    private final ModeullakRepository modeullakRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final StorageRepository storageRepository;

    @Override
    public CreateStorageResponseDto execute(UUID accountId, CreateStorageRequestDto requestDto) {
        // 1. 사용자 및 모들락 정보 조회
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Modeullak modeullak = modeullakRepository.findById(requestDto.modeullakId())
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 조회할 UserModeullak 정보 조회
        UserModeullak userModeullak = userModeullakRepository.findByUserAndModeullak(user, modeullak)
                .orElseThrow(() -> new CommonException(ErrorCode.ACCESS_DENIED));

        // 3. 상위 Storage에 추가하는 경우
        if (requestDto.parentStorageId() != null) {
            Storage parentStorage = storageRepository.findById(requestDto.parentStorageId())
                    .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

            if (!parentStorage.getUserModeullakId().equals(userModeullak.getId())) {
                throw new CommonException(ErrorCode.ACCESS_DENIED);
            }

            if (parentStorage.getType() == EStorageType.FILE) {
                throw new CommonException(ErrorCode.NOT_CREATE_STORAGE_IN_FILE);
            }
        }

        // 4. Storage 생성 및 저장
        Storage storage = storageRepository.save(generateStorage(userModeullak, requestDto));

        // 5. Create Storage Event 발생

        return CreateStorageResponseDto.fromEntity(storage);
    }

    private Storage generateStorage(
            UserModeullak userModeullak,
            CreateStorageRequestDto requestDto
    ) {
        return switch (EStorageType.fromString(requestDto.type())) {
            case DIRECTORY -> {
                String title = requestDto.name();

                yield Directory.builder()
                        .parentId(requestDto.parentStorageId())
                        .userModeullakId(userModeullak.getId())
                        .title(title)
                        .build();
            }
            case FILE -> {
                int lastDotIndex = requestDto.name().lastIndexOf(".");

                String title = requestDto.name().substring(0, lastDotIndex);
                String extension = requestDto.name().substring(lastDotIndex + 1);

                yield File.builder()
                        .parentId(requestDto.parentStorageId())
                        .userModeullakId(userModeullak.getId())
                        .title(title)
                        .extension(extension)
                        .build();
            }
        };
    }
}
