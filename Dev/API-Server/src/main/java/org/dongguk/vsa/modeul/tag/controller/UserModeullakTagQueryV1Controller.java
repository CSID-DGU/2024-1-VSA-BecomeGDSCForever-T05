package org.dongguk.vsa.modeul.tag.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.annotation.validation.DateValue;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.tag.usecase.ReadTagsListUsingUserAndDateUseCase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class UserModeullakTagQueryV1Controller {

    private final ReadTagsListUsingUserAndDateUseCase readTagsListUsingUserAndDateUseCase;

    @GetMapping("/users/modeullaks/tags")
    public ResponseDto<?> readUserModeullakTagsByStartedAtAndEndedAt(
            @AccountID UUID accountId,
            @DateValue String startedAt,
            @DateValue String endedAt
    ) {
        return ResponseDto.ok(
                readTagsListUsingUserAndDateUseCase.execute(
                        accountId,
                        startedAt,
                        endedAt
                )
        );
    }
}
