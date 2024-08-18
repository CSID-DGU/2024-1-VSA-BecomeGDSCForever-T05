package org.dongguk.vsa.modeul.storage.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;
import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;
import org.dongguk.vsa.modeul.storage.repository.mongo.StorageRepository;
import org.dongguk.vsa.modeul.storage.usecase.DeleteStorageUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Stack;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DeleteStorageService implements DeleteStorageUseCase {

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final StorageRepository storageRepository;

    @Override
    public void execute(UUID accountId, String storageId) {
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

        // 3. 하위 저장소 삭제(만약 DIRECTORY일 경우 하위 저장소까지 모두 삭제하는 재귀문 필요)
        deleteStorageIteratively(storage);

        // TODO: 4. Delete Storage Event 발생
    }

    private void deleteStorageIteratively(Storage rootStorage) {
        Stack<Storage> stack = new Stack<>();
        stack.push(rootStorage);

        while (!stack.isEmpty()) {
            Storage currentStorage = stack.pop();

            // 만약 디렉토리라면, 하위 저장소를 스택에 추가
            if (currentStorage.getType() == EStorageType.DIRECTORY) {
                List<Storage> subStorages = storageRepository.findByParentId(currentStorage.getId());
                for (Storage subStorage : subStorages) {
                    stack.push(subStorage);
                }
            }

            // 현재 저장소 삭제
            storageRepository.delete(currentStorage);
        }
    }
}
