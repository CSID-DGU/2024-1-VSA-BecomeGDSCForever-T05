package org.dongguk.vsa.modeul.dialogue.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.dialogue.usecase.ReadDialogueBriefListUseCase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ModeullakKeywordDialogueQueryV1Controller {

    private final ReadDialogueBriefListUseCase readDialogueBriefListUseCase;

    /**
     * 5-2. (모들락 , 키워드 종속) 핵심 키워드의 모들락 대화 간단(Brief) 모음 조회하기
     *
     * @param accountId 요청한 사용자의 ID
     * @param keywordId 키워드 ID
     * @param modeullakId 모들락 ID
     *
     * @return 해당 모들락과 키워드에 해당하는 대화 간단(Brief) 모음
     */
    @GetMapping("/modeullaks/{modeullakId}/keywords/{keywordId}/dialogues/briefs")
    public ResponseDto<?> readDialogueBriefList(
            @AccountID UUID accountId,
            @PathVariable Long keywordId,
            @PathVariable Long modeullakId
    ) {
        return ResponseDto.ok(readDialogueBriefListUseCase.execute(accountId, keywordId, modeullakId));
    }
}
