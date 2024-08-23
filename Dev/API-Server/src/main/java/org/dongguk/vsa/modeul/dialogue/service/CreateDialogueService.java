package org.dongguk.vsa.modeul.dialogue.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.exception.error.ErrorCode;
import org.dongguk.vsa.modeul.core.exception.type.CommonException;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.dialogue.dto.request.CreateDialogueRequestDto;
import org.dongguk.vsa.modeul.dialogue.event.CreateDialogueEvent;
import org.dongguk.vsa.modeul.dialogue.repository.mysql.DialogueRepository;
import org.dongguk.vsa.modeul.dialogue.usecase.CreateDialogueUseCase;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.storage.domain.mongo.File;
import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;
import org.dongguk.vsa.modeul.storage.repository.mongo.StorageRepository;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.dongguk.vsa.modeul.user.repository.mysql.UserRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CreateDialogueService implements CreateDialogueUseCase {

    private final UserRepository userRepository;
    private final ModeullakRepository modeullakRepository;

    private final DialogueRepository dialogueRepository;

    private final StorageRepository storageRepository;

    private final ApplicationEventPublisher applicationEventPublisher;

    @Override
    @Transactional
    public void execute(CreateDialogueRequestDto requestDto, UUID accountId) {

        // 1. 사용자 조회
        User user = userRepository.findById(accountId)
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));
        Modeullak modeullak = modeullakRepository.findById(requestDto.modeullakId())
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 2. Storage 조회
        Storage storage = storageRepository.findById(requestDto.storageId())
                .orElseThrow(() -> new CommonException(ErrorCode.NOT_FOUND_RESOURCE));

        // 3. 파일 타입이 아닌 경우 예외 발생
        if (!(storage instanceof File)) {
            throw new CommonException(ErrorCode.INVALID_DIALOGUE_TYPE);
        }

        // 4. questionLongCode 설정 (Storage가 File 타입일 경우)
        String questionLongCode = getMarkdownForm((File) storage);

        // 5. Dialogue 생성
        Dialogue dialogue = Dialogue.builder()
                .questionShortCode(requestDto.shortCode())
                .questionLongCode(questionLongCode)
                .questionContent(requestDto.content())
                .user(user)
                .modeullak(modeullak)
                .build();

        // 6. Dialogue 저장
        dialogueRepository.save(dialogue);

        // 7. CreateDialogueEvent 발생
        applicationEventPublisher.publishEvent(
                CreateDialogueEvent.builder()
                        .dialogueId(dialogue.getId())
                        .questionLongCode(dialogue.getQuestionLongCode())
                        .questionShortCode(dialogue.getQuestionShortCode())
                        .questionContent(dialogue.getQuestionContent())
                        .build()
        );
    }

    private String getMarkdownForm(File file) {
        String extension = file.getExtension();

        if (Objects.equals(extension, "js")) {
            return "javascript";
        } else if (Objects.equals(extension, "c")) {
            return "c";
        } else if (Objects.equals(extension, "java")) {
            return "java";
        } else if (Objects.equals(extension, "py")) {
            return "python";
        } else if (Objects.equals(extension, "cpp")) {
            return "cpp";
        }

        String prefix = "```" + extension + "\n";
        String postfix = "\n```";

        return prefix + file.getContent() + postfix;
    }
}
