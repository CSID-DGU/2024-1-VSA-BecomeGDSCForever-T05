package org.dongguk.vsa.modeul.modeullak.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.annotation.TimeValue;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.core.utility.DateTimeUtil;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.tag.domain.mysql.Tag;

import java.util.List;
import java.util.Map;

@Getter
public class ModeullakOverviewListResponseDto extends SelfValidating<ModeullakOverviewListResponseDto> {

    @JsonProperty("modeullaks")
    private final List<ModeullakOverviewResponseDto> modeullaks;

    @Builder
    public ModeullakOverviewListResponseDto(List<ModeullakOverviewResponseDto> modeullaks) {
        this.modeullaks = modeullaks;
    }

    public static ModeullakOverviewListResponseDto fromEntities(List<Modeullak> modeullaks, Map<Long, List<Tag>> tagMap) {
        List<ModeullakOverviewResponseDto> overviews = modeullaks.stream()
                .map(modeullak -> {
                    List<Tag> tags = tagMap.get(modeullak.getId());

                    return ModeullakOverviewResponseDto.fromEntity(modeullak, tags);
                })
                .toList();

        return ModeullakOverviewListResponseDto.builder()
                .modeullaks(overviews)
                .build();
    }

    @Getter
    public static class ModeullakOverviewResponseDto extends SelfValidating<ModeullakOverviewResponseDto> {

        @JsonProperty("id")
        @NotNull
        private final Long id;

        @JsonProperty("title")
        @NotNull
        @Size(min = 1, max = 20)
        private final String title;

        @JsonProperty("content")
        @NotNull
        @Size(min = 1, max = 200)
        private final String content;

        @JsonProperty("tags")
        @NotNull
        private final List<String> tags;

        @JsonProperty("started_at")
        @TimeValue
        private final String startedAt;

        @JsonProperty("ended_at")
        @TimeValue
        private final String endedAt;

        @Builder
        public ModeullakOverviewResponseDto(
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

            System.out.println(id + " " + title + " " + content + " " + tags + " " + startedAt + " " + endedAt);

            validateSelf();
        }

        public static ModeullakOverviewResponseDto fromEntity(Modeullak modeullak, List<Tag> tags) {
            List<String> tagStrings = tags.stream().map(Tag::getName).toList();
            String startedAt = DateTimeUtil.convertLocalTimeToString(modeullak.getStartedAt().toLocalTime());
            String endedAt = DateTimeUtil.convertLocalTimeToString(modeullak.getEndedAt().toLocalTime());

            return ModeullakOverviewResponseDto.builder()
                    .id(modeullak.getId())
                    .title(modeullak.getTitle())
                    .content(modeullak.getContent())
                    .tags(tagStrings)
                    .startedAt(startedAt)
                    .endedAt(endedAt)
                    .build();
        }

    }
}
