package org.dongguk.vsa.modeul.dialogue.domain.mysql;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.dialogue.domain.type.EDialogueStatus;
import org.dongguk.vsa.modeul.keyword.domain.mysql.Keyword;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.user.domain.mysql.User;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "dialogues")
public class Dialogue {

    /* -------------------------------------------- */
    /* Default Column ----------------------------- */
    /* -------------------------------------------- */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    /* -------------------------------------------- */
    /* Information Attribute ---------------------- */
    /* -------------------------------------------- */
    @Lob
    @Column(name="question_short_code", length = 3000, nullable = false)
    private String questionShortCode;

    @Lob
    @Column(name="question_long_code", length = 10000, nullable = false)
    private String questionLongCode;

    @Lob
    @Column(name="question_content", length = 3000, nullable = false)
    private String questionContent;

    @Lob
    @Column(name = "answer", length = 5000)
    private String answer;

    @Column(name = "is_answered_by_llm")
    private Boolean isAnsweredByLlm;

    @Enumerated(EnumType.STRING)
    @Column(name ="status", nullable = false)
    private EDialogueStatus status;

    /* -------------------------------------------- */
    /* Timestamp Column --------------------------- */
    /* -------------------------------------------- */
    @Column(name = "asked_at", nullable = false, updatable = false)
    private LocalDateTime askedAt;

    @Column(name = "replied_at", updatable = false)
    private LocalDateTime repliedAt;

    /* -------------------------------------------- */
    /* Many To One Mapping ------------------------ */
    /* -------------------------------------------- */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "modeullak_id", nullable = false)
    private Modeullak modeullak;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "keyword_id")
    private Keyword keyword;

    /* -------------------------------------------- */
    /* Methods ------------------------------------ */
    /* -------------------------------------------- */
    @Builder
    public Dialogue(
            String questionShortCode,
            String questionLongCode,
            String questionContent,
            EDialogueStatus status,
            User user,
            Modeullak modeullak
    ) {
        this.questionShortCode = questionShortCode;
        this.questionLongCode = questionLongCode;
        this.questionContent = questionContent;
        this.status = EDialogueStatus.PENDING;
        this.user = user;
        this.modeullak = modeullak;
        this.askedAt = LocalDateTime.now();
    }

    public void updateAnswer(String answer, Boolean isAnsweredByLlm) {
        this.answer = answer;
        this.isAnsweredByLlm = isAnsweredByLlm;
        this.repliedAt = LocalDateTime.now();
    }

    public void updateQuestionContent(String questionContent) {
        this.questionContent = questionContent;
    }

    public void updateStatus(EDialogueStatus status) {
        this.status = status;
    }

}
