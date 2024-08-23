package org.dongguk.vsa.modeul.dialogue.controller;

import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.dongguk.vsa.modeul.dialogue.usecase.UpdateAnswerInDialogueUseCase;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class DialogueConsumerController {

    private final UpdateAnswerInDialogueUseCase updateAnswerInDialogueUseCase;

    @KafkaListener(
            topics = "answer_topic",
            groupId = "main-server-consumer-group"
    )
    public void consumeSimilarityResult(
            ConsumerRecord<String, Map<String, Object>>  record
    ) {
        Map<String, Object> payload = record.value();

        Long requestDialogId = (Long) payload.get("request_dialogue_id");
        Long similarDialogId = (Long) payload.get("similar_dialogue_id");
        String answer = (String) payload.get("answer");
        String keyword = (String) payload.get("keyword");

        updateAnswerInDialogueUseCase.execute(
                requestDialogId,
                similarDialogId,
                answer,
                keyword
        );
    }
}
