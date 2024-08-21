package org.dongguk.vsa.modeul.kafka.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class KafkaController {


    @KafkaListener(topics = "similarity-check", groupId = "main-server-consumer-group")
    public void consumeSimilarityResult(String message) {

        // TODO: 유사도 검사 값 결과 처리 로직 구현
    }
}
