package org.dongguk.vsa.modeul.storage.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;
import org.dongguk.vsa.modeul.storage.dto.response.StorageBriefListResponseDto;
import org.dongguk.vsa.modeul.storage.repository.mongo.StorageRepository;
import org.dongguk.vsa.modeul.storage.usecase.ReadStorageBriefUsingUserAndModeullakUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReadStorageBriefUsingUserAndModeullakService implements ReadStorageBriefUsingUserAndModeullakUseCase {

    private final UserRepository userRepository;
    private final ModeullakRepository modeullakRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final StorageRepository storageRepository;

    @Override
    public StorageBriefListResponseDto execute(UUID accountId, Long modeullakId) {
        // 1. 사용자 및 모들락 정보 조회
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Modeullak modeullak = modeullakRepository.findById(modeullakId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 조회할 UserModeullak 정보 조회
        UserModeullak userModeullak = getUserModeullak(user, modeullak);

        // 3. Storage 조회 및 그룹핑
        List<Storage> allStorages = storageRepository.findByUserModeullakId(userModeullak.getId());

        List<Storage> storages = allStorages.stream()
                .filter(storage -> storage.getParentId() == null)
                .toList();
        Map<String, List<Storage>> children = allStorages.stream()
                .filter(storage -> storage.getParentId() != null)
                .collect(Collectors.groupingBy(Storage::getParentId));

        // 4. DTO 변환
        return StorageBriefListResponseDto.fromEntitiesAndChildren(storages, children);
    }

    @Override
    public StorageBriefListResponseDto execute(UUID accountId, Long modeullakId, UUID userId) {
        // 1. 요청한 사용자, 조회할 사용자 및 모들락 정보 조회
        User requestedUser = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));
        Modeullak modeullak = modeullakRepository.findById(modeullakId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 조회할 UserModeullak 정보 조회
        UserModeullak userModeullak = getUserModeullak(requestedUser, user, modeullak);

        // 3. Storage 조회 및 그룹핑
        List<Storage> allStorages = storageRepository.findByUserModeullakId(userModeullak.getId());

        List<Storage> storages = allStorages.stream()
                .filter(storage -> storage.getParentId() == null)
                .toList();
        Map<String, List<Storage>> children = allStorages.stream()
                .filter(storage -> storage.getParentId() != null)
                .collect(Collectors.groupingBy(Storage::getParentId));

        // 4. DTO 변환
        return StorageBriefListResponseDto.fromEntitiesAndChildren(storages, children);
    }

    private UserModeullak getUserModeullak(User requestedUser, User user, Modeullak modeullak) {
        userModeullakRepository.findByUserAndModeullak(requestedUser, modeullak)
                .orElseThrow(() -> new CommonException(ErrorCode.ACCESS_DENIED));

        return userModeullakRepository.findByUserAndModeullak(user, modeullak)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));
    }

    private UserModeullak getUserModeullak(User user, Modeullak modeullak) {
        return userModeullakRepository.findByUserAndModeullak(user, modeullak)
                .orElseThrow(() -> new CommonException(ErrorCode.ACCESS_DENIED));
    }
}
