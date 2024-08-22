package org.dongguk.vsa.modeul.modeullak.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.annotation.validation.TimeValue;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Getter
public class ModeullakSummaryResponseDto extends SelfValidating<ModeullakSummaryResponseDto> {
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

    @JsonProperty("participation_code")
    @NotNull
    @Pattern(regexp = "^[a-zA-Z0-9]{6,14}$")
    private final String participationCode;

    @JsonProperty("total_time")
    @TimeValue
    private final String totalTime;

    @JsonProperty("remained_time")
    @TimeValue
    private final String remainedTime;

    @JsonProperty("is_host")
    private final Boolean isHost;

    @Builder
    public ModeullakSummaryResponseDto(
            Long id,
            String title,
            List<String> tags,
            String participationCode,
            String totalTime,
            String remainedTime,
            Boolean isHost
    ) {
        this.id = id;
        this.title = title;
        this.tags = tags;
        this.participationCode = participationCode;

        this.totalTime = totalTime;
        this.remainedTime = remainedTime;

        this.isHost = isHost;

        validateSelf();
    }

    public static ModeullakSummaryResponseDto fromEntity(Modeullak modeullak, Boolean isHost) {
        LocalDateTime startedAt = modeullak.getStartedAt();
        LocalDateTime endedAt = modeullak.getEndedAt();
        LocalDateTime now = LocalDateTime.now();

        Duration totalDuration = Duration.between(startedAt, endedAt);
        Duration remainedDuration = Duration.between(now, endedAt).isNegative() ? Duration.ZERO : Duration.between(now, endedAt);

        return ModeullakSummaryResponseDto.builder()
                .id(modeullak.getId())
                .title(modeullak.getTitle())
                .tags(modeullak.getTags().stream().map(tag -> tag.getTag().getName()).toList())
                .participationCode(modeullak.getParticipationCode())
                .totalTime(formatDuration(totalDuration))
                .remainedTime(formatDuration(remainedDuration))
                .isHost(isHost)
                .build();
    }

    private static String formatDuration(Duration duration) {
        long hours = duration.toHours();
        long minutes = duration.toMinutes() % 60;

        return String.format("%02d:%02d", hours, minutes);
    }
}
