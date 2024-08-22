package org.dongguk.vsa.modeul.tag.usecase;

import org.dongguk.vsa.modeul.core.annotation.bean.UseCase;
import org.dongguk.vsa.modeul.tag.dto.response.TagsWithDateListDto;

import java.util.UUID;

@UseCase
public interface ReadTagsListUsingUserAndDateUseCase {

    TagsWithDateListDto execute(
            UUID accountId,
            String startedAt,
            String endedAt
    );
}
