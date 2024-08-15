package org.dongguk.vsa.modeul.dialogue.domain.mysql;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    /* -------------------------------------------- */
    /* Information Attribute ---------------------- */
    /* -------------------------------------------- */
    @Column(name="question_short_code", length = 3000, nullable = false)
    private String questionShortCode;

    @Column(name="question_long_code", length = 10000, nullable = false)
    private String questionLongCode;

    @Column(name="question_content", length = 3000, nullable = false)
    private String questionContent;

    @Column(name = "answer", length = 3000)
    private String answer;

    @Column(name = "is_answered_by_llm")
    private Boolean isAnsweredByLlm;

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
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name ="user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "modeullak_id", nullable = false)
    private Modeullak modeullak;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "keyword_id", nullable = false)
    private Keyword keyword;

    /* -------------------------------------------- */
    /* Methods ------------------------------------ */
    /* -------------------------------------------- */
    @Builder
    public Dialogue(String questionShortCode, String questionLongCode, String questionContent, User user, Modeullak modeullak, Keyword keyWord) {
        this.questionShortCode = questionShortCode;
        this.questionLongCode = questionLongCode;
        this.questionContent = questionContent;
        this.user = user;
        this.modeullak = modeullak;
        this.keyword = keyWord;
        this.askedAt = LocalDateTime.now();
    }

    public void updateAnswer(String answer, Boolean isAnsweredByLlm) {
        this.answer = answer;
        this.isAnsweredByLlm = isAnsweredByLlm;
        this.repliedAt = LocalDateTime.now();
    }
}
