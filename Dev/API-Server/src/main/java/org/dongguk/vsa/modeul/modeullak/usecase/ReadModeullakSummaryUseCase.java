package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.UseCase;
import org.dongguk.vsa.modeul.modeullak.dto.response.ReadModeullakSummaryResponseDto;

import java.util.UUID;

@UseCase
public interface ReadModeullakSummaryUseCase {

    ReadModeullakSummaryResponseDto execute(UUID accountId, Long modeullakId);
}
