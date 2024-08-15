package org.dongguk.vsa.modeul.modeullak.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.HttpCommonException;
import org.dongguk.vsa.modeul.core.scheduler.UpdaterScheduler;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.modeullak.usecase.UpdateStatusInModeullakUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.domain.type.EModeullakRole;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UpdateStatusInModeullakService implements UpdateStatusInModeullakUseCase {

    private final ModeullakRepository modeullakRepository;

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final UpdaterScheduler updaterScheduler;

    @Override
    @Transactional
    public void execute(UUID accountId, Long modeullakId) {
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new HttpCommonException(ErrorCode.NOT_FOUND_USER));

        Modeullak modeullak = modeullakRepository.findById(modeullakId)
                .orElseThrow(() -> new HttpCommonException(ErrorCode.NOT_FOUND_RESOURCE));

        if (isStartedModeullak(modeullak)) {
            throw new HttpCommonException(ErrorCode.ALREADY_ENDED_MODEULLAK);
        }

        if (isNotHost(user, modeullak)) {
            throw new HttpCommonException(ErrorCode.ACCESS_DENIED);
        }

        modeullak.updateStatus(EModeullakStatus.ENDED);

        updaterScheduler.removeModeullakTask(modeullakId);

        // TODO: Kafka로 모들락 종료 Event 전송(비동기)

        // TODO: 현재 모들락에 접속되어 있는 유저 모두 종료 처리(비동기)
    }

    private Boolean isStartedModeullak(Modeullak modeullak) {
        return modeullak.getStatus() != EModeullakStatus.STARTED;
    }

    /**
     * 해당 유저가 모들락의 Host인지 확인합니다.
     * @param user 사용자
     * @param modeullak 모들락
     * @return 해당 유저가 모들락의 Host인지 여부
     */
    private Boolean isNotHost(User user, Modeullak modeullak) {
        UserModeullak userModeullak = userModeullakRepository.findByUserAndModeullak(user, modeullak)
                .orElseThrow(() -> new HttpCommonException(ErrorCode.NOT_FOUND_RESOURCE));

        return userModeullak.getRole() != EModeullakRole.HOST;
    }
}
