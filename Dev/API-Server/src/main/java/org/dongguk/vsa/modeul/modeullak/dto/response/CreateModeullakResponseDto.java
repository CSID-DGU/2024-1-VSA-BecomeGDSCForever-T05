package org.dongguk.vsa.modeul.modeullak.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.annotation.validation.DateTimeValue;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.core.utility.DateTimeUtil;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.tag.domain.mysql.Tag;

import java.util.List;

@Getter
public class CreateModeullakResponseDto extends SelfValidating<CreateModeullakResponseDto> {
    @JsonProperty("id")
    @NotNull
    private final Long id;

    @JsonProperty("title")
    @Size(min = 1, max = 20)
    private final String title;

    @JsonProperty("start_at")
    @DateTimeValue
    private final String statedAt;

    @JsonProperty("remained_minute")
    @DateTimeValue
    private final String endedAt;

    @JsonProperty("tags")
    @NotNull
    private final List<String> tags;

    @Builder
    public CreateModeullakResponseDto(
            Long id,
            String title,
            String statedAt,
            String endedAt,
            List<String> tags
    ) {
        this.id = id;
        this.title = title;
        this.statedAt = statedAt;
        this.endedAt = endedAt;
        this.tags = tags;

        validateSelf();
    }


    public static CreateModeullakResponseDto fromEntity(
            Modeullak modeullakEntity,
            List<Tag> tagEntities
    ) {
        return CreateModeullakResponseDto.builder()
                .id(modeullakEntity.getId())
                .title(modeullakEntity.getTitle())
                .statedAt(DateTimeUtil.convertLocalDateTimeToString(modeullakEntity.getStartedAt()))
                .endedAt(DateTimeUtil.convertLocalDateTimeToString(modeullakEntity.getEndedAt()))
                .tags(tagEntities.stream().map(Tag::getName).toList())
                .build();
    }
}
