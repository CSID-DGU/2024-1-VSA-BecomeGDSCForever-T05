package org.dongguk.vsa.modeul.dialogue.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.security.AccountID;
import org.dongguk.vsa.modeul.core.dto.ResponseDto;
import org.dongguk.vsa.modeul.dialogue.dto.request.UpdateAnswerInDialogueRequestDto;
import org.dongguk.vsa.modeul.dialogue.dto.request.UpdateQuestionInDialogueRequestDto;
import org.dongguk.vsa.modeul.dialogue.dto.request.CreateDialogueRequestDto;
import org.dongguk.vsa.modeul.dialogue.usecase.DeleteDialogueUseCase;
import org.dongguk.vsa.modeul.dialogue.usecase.UpdateAnswerInDialogueUseCase;
import org.dongguk.vsa.modeul.dialogue.usecase.UpdateQuestionInDialogueUseCase;
import org.dongguk.vsa.modeul.dialogue.usecase.CreateDialogueUseCase;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class DialogueCommandV1Controller {

    private final CreateDialogueUseCase createDialogueUseCase;
    private final UpdateQuestionInDialogueUseCase updateQuestionInDialogueUseCase;
    private final UpdateAnswerInDialogueUseCase updateAnswerInDialogueUseCase;
    private final DeleteDialogueUseCase deleteDialogueUseCase;

    // 5-7. 모들락 대화 생성하기
    @PostMapping("/dialogues")
    public ResponseDto<?> createDialogue(
            @Valid @RequestBody CreateDialogueRequestDto requestDto,
            @AccountID UUID accountId
    ) {
        createDialogueUseCase.execute(requestDto, accountId);
        return ResponseDto.created(null);
    }

    // 5-8. 모들락 대화 질문 생성/수정하기
    @PutMapping("/dialogues/{dialogueId}/questions")
    public ResponseDto<?> updateDialogueQuestion(
            @Valid @RequestBody UpdateQuestionInDialogueRequestDto requestDto,
            @PathVariable(name = "dialogueId") Long dialogueId,
            @AccountID UUID accountId
    ) {
        updateQuestionInDialogueUseCase.execute(requestDto, accountId, dialogueId);
        return ResponseDto.created(null);
    }

    // 5-9. 모들락 대화 답변 생성/수정하기
    @PutMapping("/dialogues/{dialogueId}/answers")
    public ResponseDto<?> updateDialogueAnswer(
            @Valid @RequestBody UpdateAnswerInDialogueRequestDto requestDto,
            @PathVariable(name = "dialogueId") Long dialogueId,
            @AccountID UUID accountId
    ) {
        updateAnswerInDialogueUseCase.execute(requestDto, dialogueId, accountId);
        return ResponseDto.created(null);
    }

    // 5-10. 모들락 대화 삭제하기
    @DeleteMapping("/dialogues/{dialogueId}")
    public ResponseDto<?> deleteDialogue(
            @PathVariable(name = "dialogueId") Long dialogueId,
            @AccountID UUID accountId
    ) {
        deleteDialogueUseCase.execute(dialogueId, accountId);
        return ResponseDto.ok(null);
    }
}
