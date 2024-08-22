package org.dongguk.vsa.modeul.modeullak.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakRole;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.modeullak.dto.response.ModeullakSummaryResponseDto;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakSummaryUseCase;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReadModeullakSummaryService implements ReadModeullakSummaryUseCase {

    private final ModeullakRepository modeullakRepository;

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    @Override
    public ModeullakSummaryResponseDto execute(UUID accountId, Long modeullakId) {
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_USER));

        Modeullak modeullak = modeullakRepository.findWithTagsById(modeullakId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        UserModeullak userModeullak = userModeullakRepository.findByUserAndModeullak(user, modeullak)
                .orElseThrow(() -> new CommonException(ErrorCode.ACCESS_DENIED));

        if (modeullak.getStatus() != EModeullakStatus.STARTED) {
            throw new CommonException(ErrorCode.MODEULLAK_NOT_STARTED);
        }

        return ModeullakSummaryResponseDto.fromEntity(modeullak, userModeullak.getRole() == EModeullakRole.HOST);
    }
}
