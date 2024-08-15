package org.dongguk.vsa.modeul.modeullak.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.AccountID;
import org.dongguk.vsa.modeul.core.annotation.DateValue;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadCurrentUserParticipationStatusesUseCase;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakOverviewsByUserUseCase;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class UserModeullakQueryV1Controller {

    private final ReadCurrentUserParticipationStatusesUseCase readCurrentUserParticipationStatusesUseCase;
    private final ReadModeullakOverviewsByUserUseCase readModeullakOverviewsByUserUseCase;

    @GetMapping("/users/modeullaks/participation-statuses")
    public ResponseDto<?> readCurrentUserParticipationStatuses(
            @AccountID UUID accountId
    ) {
        return ResponseDto.ok(readCurrentUserParticipationStatusesUseCase.execute(accountId));
    }

    @GetMapping("/users/modeullaks/overviews")
    public ResponseDto<?> readModeullakOverviewsByUser(
            @AccountID UUID accountId,
            @RequestParam(name = "whichAt") @DateValue String whichAt
    ) {
        return ResponseDto.ok(readModeullakOverviewsByUserUseCase.execute(accountId, whichAt));
    }
}
