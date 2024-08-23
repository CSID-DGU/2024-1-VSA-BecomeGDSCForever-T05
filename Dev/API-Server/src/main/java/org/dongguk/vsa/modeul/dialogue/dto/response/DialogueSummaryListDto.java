package org.dongguk.vsa.modeul.dialogue.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.annotation.validation.DateTimeValue;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.core.utility.DateTimeUtil;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class DialogueSummaryListDto extends SelfValidating<DialogueSummaryListDto> {

    @JsonProperty("dialogues")
    @NotNull
    private final List<DialogueSummaryDto> dialogues;

    @Builder
    public DialogueSummaryListDto(
            List<DialogueSummaryDto> dialogues
    ) {
        this.dialogues = dialogues;
    }

    public static DialogueSummaryListDto fromEntities(List<Dialogue> entities) {
        return DialogueSummaryListDto.builder()
                .dialogues(entities.stream()
                        .map(DialogueSummaryDto::fromEntity)
                        .toList())
                .build();
    }

    @Getter
    public static class DialogueSummaryDto extends SelfValidating<DialogueSummaryDto> {

        @JsonProperty("id")
        @NotNull
        private final Long id;

        @JsonProperty("keyword_name")
        @NotNull
        private final String keywordName;

        @JsonProperty("question_content")
        @NotNull
        private final String questionContent;

        @JsonProperty("is_answered_by_llm")
        @NotNull
        private final Boolean isAnsweredByLLM;

        @JsonProperty("updated_at")
        @DateTimeValue
        private final String updatedAt;

        @Builder
        public DialogueSummaryDto(
                Long id,
                String keywordName,
                String questionContent,
                Boolean isAnsweredByLLM,
                String updatedAt
        ) {
            this.id = id;
            this.keywordName = keywordName;
            this.questionContent = questionContent;
            this.isAnsweredByLLM = isAnsweredByLLM;
            this.updatedAt = updatedAt;
        }

        public static DialogueSummaryDto fromEntity(Dialogue entity) {
            LocalDateTime updatedAt = entity.getRepliedAt() == null ? entity.getAskedAt() : entity.getRepliedAt();

            return DialogueSummaryDto.builder()
                    .id(entity.getId())
                    .keywordName(entity.getKeyword().getName())
                    .questionContent(entity.getQuestionContent())
                    .isAnsweredByLLM(entity.getIsAnsweredByLlm())
                    .updatedAt(DateTimeUtil.convertLocalDateTimeToString(updatedAt))
                    .build();
        }
    }
}
