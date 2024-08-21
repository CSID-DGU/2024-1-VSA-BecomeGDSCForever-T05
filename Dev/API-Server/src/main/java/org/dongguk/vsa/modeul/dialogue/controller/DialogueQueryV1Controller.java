package org.dongguk.vsa.modeul.dialogue.controller;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.dialogue.usecase.ReadDialogueDetailUseCase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class DialogueQueryV1Controller {

    private final ReadDialogueDetailUseCase readDialogueDetailUseCase;

    // 5-6. 모들락 대화 상세(Detail) 조회하기
    @GetMapping("/dialogues/{dialogueId}")
    public ResponseDto<?> getDialogueDetail(
            @PathVariable(name = "dialogueId") Long dialogueId
    ) {
        return ResponseDto.ok(readDialogueDetailUseCase.execute(dialogueId));
    }
}
