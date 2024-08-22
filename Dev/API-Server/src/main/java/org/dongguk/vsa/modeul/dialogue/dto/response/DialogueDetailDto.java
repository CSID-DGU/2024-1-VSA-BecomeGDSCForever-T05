package org.dongguk.vsa.modeul.dialogue.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import org.dongguk.vsa.modeul.core.dto.SelfValidating;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;

import java.time.LocalDateTime;

@Getter
public class DialogueDetailDto extends SelfValidating<DialogueDetailDto> {

    @NotNull
    @JsonProperty("id")
    private final Long id;

    @NotNull
    @JsonProperty("question_short_code")
    private final String questionShortCode;

    @NotNull
    @JsonProperty("question_long_code")
    private final String questionLongCode;

    @NotNull
    @JsonProperty("question_content")
    private final String questionContent;

    @NotNull
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    @JsonProperty("asked_at")
    private final LocalDateTime askedAt;

    @JsonProperty("answer")
    private final String answer;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    @JsonProperty("replied_at")
    private final LocalDateTime repliedAt;

    @JsonProperty("is_answered_by_llm")
    private final Boolean isAnsweredByLlm;

    @Builder
    public DialogueDetailDto(
            Long id,
            String questionShortCode,
            String questionLongCode,
            String questionContent,
            LocalDateTime askedAt,
            String answer,
            LocalDateTime repliedAt,
            Boolean isAnsweredByLlm
    ) {
        this.id = id;
        this.questionShortCode = questionShortCode;
        this.questionLongCode = questionLongCode;
        this.questionContent = questionContent;
        this.askedAt = askedAt;
        this.answer = answer;
        this.repliedAt = repliedAt;
        this.isAnsweredByLlm = isAnsweredByLlm;
        validateSelf();
    }

    public static DialogueDetailDto fromEntity(Dialogue dialogue) {
        return DialogueDetailDto.builder()
                .id(dialogue.getId())
                .questionShortCode(dialogue.getQuestionShortCode())
                .questionLongCode(dialogue.getQuestionLongCode())
                .questionContent(dialogue.getQuestionContent())
                .askedAt(dialogue.getAskedAt())
                .answer(dialogue.getAnswer())
                .repliedAt(dialogue.getRepliedAt())
                .isAnsweredByLlm(dialogue.getIsAnsweredByLlm())
                .build();
    }
}
