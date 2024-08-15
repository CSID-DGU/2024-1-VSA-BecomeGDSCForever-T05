package org.dongguk.vsa.modeul.modeullak.service;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakTag;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.dongguk.vsa.modeul.modeullak.dto.response.ModeullakOverviewListResponseDto;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakRepository;
import org.dongguk.vsa.modeul.modeullak.repository.mysql.ModeullakTagRepository;
import org.dongguk.vsa.modeul.modeullak.usecase.ReadModeullakOverviewsByUserUseCase;
import org.dongguk.vsa.modeul.tag.domain.mysql.Tag;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReadModeullakOverviewsByUserService implements ReadModeullakOverviewsByUserUseCase {

    private final ModeullakRepository modeullakRepository;

    private final ModeullakTagRepository modeullakTagRepository;

    @Override
    public ModeullakOverviewListResponseDto execute(UUID accountId, String whichAt) {
        LocalDateTime startedAt = LocalDate.parse(whichAt).atStartOfDay();
        LocalDateTime endedAt = startedAt.plusDays(1).minusSeconds(1);

        List<Modeullak> modeullaks = modeullakRepository.findAllModeullaksByAccountIdAndStatusAndWhichAt(
                accountId,
                EModeullakStatus.LLM_ENDED,
                startedAt,
                endedAt
        );

        List<ModeullakTag> modeullakTags = modeullakTagRepository.findAllByModeullakIn(modeullaks);

        Map<Long, List<Tag>> tagMap = convertListToMap(modeullakTags);

        return ModeullakOverviewListResponseDto.fromEntities(modeullaks, tagMap);
    }

    private Map<Long, List<Tag>> convertListToMap(List<ModeullakTag> modeullakTags) {
        return modeullakTags.stream()
                .collect(
                        Collectors.groupingBy(
                                modeullakTag -> modeullakTag.getModeullak().getId(),
                                Collectors.mapping(ModeullakTag::getTag, Collectors.toList())
                        )
                );
    }
}
