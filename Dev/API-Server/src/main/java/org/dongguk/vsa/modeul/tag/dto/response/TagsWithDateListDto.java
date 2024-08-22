package org.dongguk.vsa.modeul.tag.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;

import java.util.List;

@Getter
public class TagsWithDateListDto extends SelfValidating<TagsWithDateListDto> {

    @NotNull
    private final List<TagsWithDateDto> tagsWithDateList;

    @Builder
    public TagsWithDateListDto(
            List<TagsWithDateDto> tagsWithDateList
    ) {
        this.tagsWithDateList = tagsWithDateList;
    }

    @Getter
    public static class TagsWithDateDto extends SelfValidating<TagsWithDateDto> {

        @JsonProperty("date")
        @NotNull
        private final String date;

        @JsonProperty("tags")
        @NotNull
        private final List<String> tags;

        @Builder
        public TagsWithDateDto(
                String date,
                List<String> tags
        ) {
            this.date = date;
            this.tags = tags;
        }
    }
}
