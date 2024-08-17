package org.dongguk.vsa.modeul.modeullak.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.modeullak.dto.response.ModeullakSummaryResponseDto;

import java.util.UUID;

@UseCase
public interface ReadModeullakSummaryUseCase {

    ModeullakSummaryResponseDto execute(UUID accountId, Long modeullakId);
}
