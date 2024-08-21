package org.dongguk.vsa.modeul.dialogue.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.dialogue.dto.request.CreateDialogueRequestDto;

import java.util.UUID;

@UseCase
public interface CreateDialogueUseCase {

    /**
     * dialogue를 생성합니다.
     * @param requestDto 대화 생성 요청 DTO
     * @param accountId 계정 ID
     */
    void execute(
            CreateDialogueRequestDto requestDto,
            UUID accountId
    );
}
