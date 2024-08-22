package org.dongguk.vsa.modeul.core.listener;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.dongguk.vsa.modeul.dialogue.event.CreateDialogueEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class DialogueListener {

    // 대화 생성 이벤트 핸들러
    @Async
    @EventListener(classes = {CreateDialogueEvent.class})
    public void handleCreateDialogueEvent(CreateDialogueEvent event){
        // TODO: 소켓 구현
    }
}
