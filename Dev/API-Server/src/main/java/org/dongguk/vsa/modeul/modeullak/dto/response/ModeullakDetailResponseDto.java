package org.dongguk.vsa.modeul.modeullak.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.annotation.DateTimeValue;
import org.dongguk.vsa.modeul.core.annotation.TimeValue;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.core.utility.DateTimeUtil;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Getter
public class ModeullakDetailResponseDto extends SelfValidating<ModeullakDetailResponseDto> {
    @JsonProperty("id")
    @NotNull
    private final Long id;

    @JsonProperty("title")
    @NotNull
    @Size(min = 1, max = 20)
    private final String title;

    @JsonProperty("content")
    @NotNull
    @Size(min = 1, max = 1000)
    private final String content;

    @JsonProperty("tags")
    @NotNull
    private final List<String> tags;

    @JsonProperty("started_at")
    @DateTimeValue
    private final String startedAt;

    @JsonProperty("ended_at")
    @DateTimeValue
    private final String endedAt;

    @Builder
    public ModeullakDetailResponseDto(
            Long id,
            String title,
            String content,
            List<String> tags,
            String startedAt,
            String endedAt
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.tags = tags;

        this.startedAt = startedAt;
        this.endedAt = endedAt;

        validateSelf();
    }

    public static ModeullakDetailResponseDto fromEntity(Modeullak modeullak) {
        return ModeullakDetailResponseDto.builder()
                .id(modeullak.getId())
                .title(modeullak.getTitle())
                .content(modeullak.getContent())
                .tags(modeullak.getTags().stream().map(tag -> tag.getTag().getName()).toList())
                .startedAt(DateTimeUtil.convertLocalDateTimeToString(modeullak.getStartedAt()))
                .endedAt(DateTimeUtil.convertLocalDateTimeToString(modeullak.getEndedAt()))
                .build();
    }
}
