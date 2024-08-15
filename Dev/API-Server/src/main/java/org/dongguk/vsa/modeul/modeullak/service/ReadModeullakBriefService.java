package org.dongguk.vsa.modeul.modeullak.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.HttpCommonException;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.dto.response.ModeullakBriefResponseDto;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakBriefUseCase;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReadModeullakBriefService implements ReadModeullakBriefUseCase {

    private final ModeullakRepository modeullakRepository;

    @Override
    public ModeullakBriefResponseDto execute(String participationCode) {
        Modeullak modeullak = modeullakRepository.findByParticipationCode(participationCode)
                .orElseThrow(() -> new HttpCommonException(ErrorCode.NOT_FOUND_RESOURCE));

        return ModeullakBriefResponseDto.fromEntity(modeullak);
    }
}
