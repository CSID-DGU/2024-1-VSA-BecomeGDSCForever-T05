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
public class DialogueTemporarySummaryListDto extends SelfValidating<DialogueTemporarySummaryListDto> {

    @JsonProperty("dialogues")
    @NotNull
    private final List<DialogueTemporarySummaryDto> dialogues;

    @Builder
    public DialogueTemporarySummaryListDto(
            List<DialogueTemporarySummaryDto> dialogues
    ) {
        this.dialogues = dialogues;
    }

    public static DialogueTemporarySummaryListDto fromEntities(List<Dialogue> entities) {
        return DialogueTemporarySummaryListDto.builder()
                .dialogues(entities.stream()
                        .map(DialogueTemporarySummaryDto::fromEntity)
                        .toList())
                .build();
    }

    public static class DialogueTemporarySummaryDto extends SelfValidating<DialogueTemporarySummaryDto> {

        @JsonProperty("id")
        @NotNull
        private final Long id;

        @JsonProperty("keyword_name")
        @NotNull
        private final String keywordName;

        @JsonProperty("question_content")
        @NotNull
        private final String questionContent;

        @JsonProperty("updated_at")
        @DateTimeValue
        private final String updatedAt;

        @JsonProperty("is_question")
        @NotNull
        private final Boolean isQuestion;

        @Builder
        public DialogueTemporarySummaryDto(
                Long id,
                String keywordName,
                String questionContent,
                String updatedAt,
                Boolean isQuestion
        ) {
            this.id = id;
            this.keywordName = keywordName;
            this.questionContent = questionContent;
            this.updatedAt = updatedAt;
            this.isQuestion = isQuestion;
        }

        public static DialogueTemporarySummaryDto fromEntity(Dialogue entity) {
            boolean isQuestion = entity.getAnswer() == null;
            LocalDateTime updatedAt = isQuestion ? entity.getAskedAt() : entity.getRepliedAt();

            return DialogueTemporarySummaryDto.builder()
                    .id(entity.getId())
                    .keywordName(entity.getKeyword().getName())
                    .questionContent(entity.getQuestionContent())
                    .updatedAt(DateTimeUtil.convertLocalDateTimeToString(updatedAt))
                    .isQuestion(isQuestion)
                    .build();
        }
    }
}
