package org.dongguk.vsa.modeul.modeullak.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Getter
public class ModeullakBriefResponseDto extends SelfValidating<ModeullakBriefResponseDto> {
    @JsonProperty("id")
    @NotNull
    private final Long id;

    @JsonProperty("title")
    @NotNull
    @Size(min = 1, max = 20)
    private final String title;

    @JsonProperty("tags")
    @NotNull
    private final List<String> tags;

    @JsonProperty("remained_hour")
    @NotNull
    private final Integer remainedHour;

    @JsonProperty("remained_minute")
    private final Integer remainedMinute;

    @Builder
    public ModeullakBriefResponseDto(
            Long id,
            String title,
            List<String> tags,
            Integer remainedHour,
            Integer remainedMinute
    ) {
        this.id = id;
        this.title = title;
        this.tags = tags;

        this.remainedHour = remainedHour;
        this.remainedMinute = remainedMinute;

        validateSelf();
    }


    public static ModeullakBriefResponseDto fromEntity(Modeullak modeullak) {
        LocalDateTime endedAt = modeullak.getEndedAt();
        LocalDateTime now = LocalDateTime.now();

        Duration duration = Duration.between(now, endedAt).isNegative() ? Duration.ZERO : Duration.between(now, endedAt);
        Integer remainedHour = (int) duration.toHours();
        Integer remainedMinute = (int) duration.toMinutes() % 60;

        return ModeullakBriefResponseDto.builder()
                .id(modeullak.getId())
                .title(modeullak.getTitle())
                .tags(modeullak.getTags().stream().map(tag -> tag.getTag().getName()).toList())
                .remainedHour(remainedHour)
                .remainedMinute(remainedMinute)
                .build();
    }
}
