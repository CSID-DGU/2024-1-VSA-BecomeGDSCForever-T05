package org.dongguk.vsa.modeul.keyword.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.keyword.dto.response.ModeullakKeywordDetailPagingDto;

import java.util.UUID;

@UseCase
public interface ReadKeywordListUsingModeullakUseCase {

    /**
     * 모들락 ID를 이용하여 키워드 리스트를 조회합니다.
     *
     * @param accountId 계정 ID
     * @param modeullakId 모들락 ID
     * @param page 페이지
     * @param size 사이즈
     *
     * @return 키워드 리스트
     */
    ModeullakKeywordDetailPagingDto execute(
            UUID accountId,
            Long modeullakId,
            Integer page,
            Integer size
    );
}
