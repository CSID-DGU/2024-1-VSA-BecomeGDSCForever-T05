package org.dongguk.vsa.modeul.modeullak.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.modeullak.dto.response.CurrentUserParticipationStatusesResponseDto;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadCurrentUserParticipationStatusesUseCase;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReadCurrentUserParticipationStatusesService implements ReadCurrentUserParticipationStatusesUseCase {

    private final ModeullakRepository modeullakRepository;

    @Override
    public CurrentUserParticipationStatusesResponseDto execute(UUID accountId) {
        Optional<Modeullak> modeullak = modeullakRepository.findCurrentModeullakByAccountIdAndStatusAndCurrentAtContentBetween(
                accountId,
                EModeullakStatus.STARTED,
                LocalDateTime.now()
        );

        if (modeullak.isPresent()) {
            return CurrentUserParticipationStatusesResponseDto.fromEntity(modeullak.get());
        } else {
            return CurrentUserParticipationStatusesResponseDto.empty();
        }
    }
}
