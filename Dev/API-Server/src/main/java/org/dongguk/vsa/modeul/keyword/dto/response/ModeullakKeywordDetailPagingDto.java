package org.dongguk.vsa.modeul.keyword.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import org.apache.commons.lang3.RandomUtils;
import org.dongguk.vsa.modeul.core.dto.PageInfo;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.keyword.domain.mysql.Keyword;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakKeyword;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;

@Getter
public class ModeullakKeywordDetailPagingDto extends SelfValidating<ModeullakKeywordDetailPagingDto> {

    @JsonProperty("page_info")
    @NotNull
    private final PageInfo pageInfo;


    @JsonProperty("keywords")
    @NotNull
    private final List<KeywordDetailDto> keywords;

    @Builder
    public ModeullakKeywordDetailPagingDto(
            PageInfo pageInfo,
            List<KeywordDetailDto> keywords
    ) {
        this.pageInfo = pageInfo;
        this.keywords = keywords;
    }

    public static ModeullakKeywordDetailPagingDto fromEntities(
            Page<ModeullakKeyword> entities,
            Map<Long, String> descriptionMap,
            Map<Long, Integer> similarQuestionCountMap,
            Map<Long, List<Long>> representativeDialogueIdsMap
    ) {
        PageInfo pageInfo = PageInfo.fromPage(entities);
        List<KeywordDetailDto> keywords = entities.getContent().stream()
                .map(modeullakKeyword -> {
                    Keyword keyword = modeullakKeyword.getKeyword();
                    String description = descriptionMap.get(keyword.getId());
                    Integer similarQuestionCount = similarQuestionCountMap.get(keyword.getId());
                    Long representativeDialogueId = representativeDialogueIdsMap.get(keyword.getId()).get(0);

                    return KeywordDetailDto.fromEntity(
                            keyword,
                            description,
                            similarQuestionCount,
                            representativeDialogueId
                    );
                })
                .toList();

        return ModeullakKeywordDetailPagingDto.builder()
                .pageInfo(pageInfo)
                .keywords(keywords)
                .build();
    }


    @Getter
    public static class KeywordDetailDto extends SelfValidating<KeywordDetailDto> {

        @JsonProperty("id")
        @NotNull
        private final Long id;

        @JsonProperty("name")
        @Size(max = 32)
        private final String name;

        @JsonProperty("description")
        @Size(max = 200)
        private final String description;

        @JsonProperty("similar_question_count")
        @NotNull
        private final Integer similarQuestionCount;

        @JsonProperty("representative_dialogue_id")
        @NotNull
        private final Long representativeDialogueId;

        @Builder
        public KeywordDetailDto(
                Long id,
                String name,
                String description,
                Integer similarQuestionCount,
                Long representativeDialogueId
        ) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.similarQuestionCount = similarQuestionCount;
            this.representativeDialogueId = representativeDialogueId;
        }

        public static KeywordDetailDto fromEntity(
                Keyword keyword,
                String description,
                Integer similarQuestionCount,
                Long representativeDialogueId
        ) {
            return KeywordDetailDto.builder()
                    .id(keyword.getId())
                    .name(keyword.getName())
                    .description(description)
                    .similarQuestionCount(similarQuestionCount)
                    .representativeDialogueId(representativeDialogueId)
                    .build();
        }
    }
}
