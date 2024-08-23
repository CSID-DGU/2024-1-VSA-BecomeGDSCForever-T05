package org.dongguk.vsa.modeul.core.listener;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.dongguk.vsa.modeul.dialogue.event.CreateDialogueEvent;
import org.dongguk.vsa.modeul.dialogue.event.UpdateAnswerInDialogueEvent;
import org.springframework.context.event.EventListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
@RequiredArgsConstructor
public class DialogueListener {

    private final KafkaTemplate<String, Map<String, Object>> kafkaTemplate;

    @Async
    @EventListener(classes = {CreateDialogueEvent.class})
    public void handleCreateDialogueEvent(CreateDialogueEvent event){
        kafkaTemplate.send("question_topic", event.toPayload());
    }

    @Async
    @EventListener(classes = {UpdateAnswerInDialogueEvent.class})
    public void handleUpdateAnswerInDialogueEvent(UpdateAnswerInDialogueEvent event){
        kafkaTemplate.send("dialogue_topic", event.toPayload());
    }
}
