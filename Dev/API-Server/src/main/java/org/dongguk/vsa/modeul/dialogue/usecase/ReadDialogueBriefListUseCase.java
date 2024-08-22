package org.dongguk.vsa.modeul.dialogue.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.dialogue.dto.response.DialogueBriefListDto;

import java.util.UUID;

@UseCase
public interface ReadDialogueBriefListUseCase {

    /**
     * 키워드와 모드락을 이용하여 대화 간략 정보를 조회합니다.
     *
     * @param accountId 계정 ID
     * @param keywordId 키워드 ID
     * @param modeullakId 모드락 ID
     *
     * @return 대화 간략 정보 리스트 DTO
     */
    DialogueBriefListDto execute(
            UUID accountId,
            Long keywordId,
            Long modeullakId
    );
}
