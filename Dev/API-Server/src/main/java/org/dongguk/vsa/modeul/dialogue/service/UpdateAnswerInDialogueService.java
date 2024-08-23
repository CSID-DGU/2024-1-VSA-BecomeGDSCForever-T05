package org.dongguk.vsa.modeul.dialogue.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.dialogue.domain.type.EDialogueStatus;
import org.dongguk.vsa.modeul.dialogue.dto.request.UpdateAnswerInDialogueRequestDto;
import org.dongguk.vsa.modeul.dialogue.event.UpdateAnswerInDialogueEvent;
import org.dongguk.vsa.modeul.dialogue.repository.mysql.DialogueRepository;
import org.dongguk.vsa.modeul.dialogue.usecase.UpdateAnswerInDialogueUseCase;
import org.dongguk.vsa.modeul.keyword.domain.mysql.Keyword;
import org.dongguk.vsa.modeul.keyword.repository.mysql.KeywordRepository;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakKeyword;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakRole;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakKeywordRepository;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.repository.mysql.UserModeullakRepository;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UpdateAnswerInDialogueService implements UpdateAnswerInDialogueUseCase {

    private final UserRepository userRepository;
    private final UserModeullakRepository userModeullakRepository;

    private final DialogueRepository dialogueRepository;

    private final KeywordRepository keywordRepository;
    private final ModeullakKeywordRepository modeullakKeywordRepository;

    private final ApplicationEventPublisher applicationEventPublisher;

    @Override
    @Transactional
    public void execute(UpdateAnswerInDialogueRequestDto requestDto, Long dialogueId, UUID accountId) {
        // 1. 대화 및 사용자 정보 조회
        Dialogue dialogue = dialogueRepository.findDialogueAndModeullakById(dialogueId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. 권한 확인
        UserModeullak userModeullak = userModeullakRepository.findByUserAndModeullak(user, dialogue.getModeullak())
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));
        if(userModeullak.getRole() != EModeullakRole.HOST) {
            throw new CommonException(ErrorCode.ACCESS_DENIED);
        }

        // 3. 대화 답변 업데이트 (조교의 답변)
        dialogue.updateAnswer(requestDto.content(), Boolean.FALSE);
        dialogue.updateStatus(EDialogueStatus.COMPLETED);

        // 4. UpdateAnswerInDialogueEvent 발생
        applicationEventPublisher.publishEvent(
                UpdateAnswerInDialogueEvent.builder()
                        .dialogueId(dialogue.getId())
                        .question(dialogue.getQuestionContent())
                        .answer(dialogue.getAnswer())
                        .build()
        );
    }

    @Override
    @Transactional
    public void execute(
            Long requestDialogId,
            Long similarDialogId,
            String answerStr,
            String keywordStr
    ) {
        // 1. 분석을 요청했던 대화를 조회한다. 이때 모들락도 같이 조회한다.
        Dialogue requestDialogue = dialogueRepository.findWithModeullakById(requestDialogId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));
        Modeullak modeullak = requestDialogue.getModeullak();

        // 2. 유사 대화가 없는 경우, 새로운 키워드를 생성하고 대화 상태를 업데이트한다.
        //    유사 대화가 있는 경우, 대화의 답변을 업데이트하고 대화 답변를 바꾸고 상태를 완료 상태로 변경한다.
        Keyword keyword = null;

        if (similarDialogId == null) {
            keyword = createOrUpdateKeyword(keywordStr);
            requestDialogue.updateStatus(EDialogueStatus.WAITING);
        } else {
            Dialogue similarDialogue = dialogueRepository.findWithKeywordById(similarDialogId)
                    .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));
            keyword = similarDialogue.getKeyword();

            requestDialogue.updateAnswer(answerStr, Boolean.TRUE);
            requestDialogue.updateStatus(EDialogueStatus.COMPLETED);
        }

        // 3. 공통적으로 대화의 키워드를 업데이트한다.
        requestDialogue.updateKeyword(keyword);

        // 4. 모들락과 핵심 키워드를 연결시켜준다.
        ModeullakKeyword modeullakKeyword = ModeullakKeyword.builder()
                .modeullak(modeullak)
                .keyword(keyword)
                .description("아직 정리되지 않은 키워드입니다.")
                .build();

        modeullakKeywordRepository.save(modeullakKeyword);
    }

    private Keyword createOrUpdateKeyword(String keywordStr) {
        return keywordRepository.findByName(keywordStr)
                .orElseGet(() -> keywordRepository.save(Keyword.builder().name(keywordStr).build()));
    }
}
