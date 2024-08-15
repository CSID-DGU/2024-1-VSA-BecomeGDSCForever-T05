package org.dongguk.vsa.modeul.modeullak.domain.mysql;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.modeullak.domain.type.ELLmStatus;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "modeullaks")
public class Modeullak {
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
    @Column(name = "title", length = 20, nullable = false)
    private String title;

    @Column(name = "content", length = 1000)
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(name = "llm_status", nullable = false)
    private ELLmStatus llmStatus;

    @Column(name="participation_code", length = 10, nullable = false, updatable = false)
    private String participationCode;

    /* -------------------------------------------- */
    /* Timestamp Column --------------------------- */
    /* -------------------------------------------- */
    @Column(name = "started_at", nullable = false, updatable = false)
    private LocalDateTime startedAt;

    @Column(name = "ended_at", nullable = false, updatable = false)
    private LocalDateTime endedAt;

    /* -------------------------------------------- */
    /* One to Many Mapping ------------------------ */
    /* -------------------------------------------- */
    @OneToMany(mappedBy = "modeullak", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ModeullakTag> tags = new ArrayList<>();

    @OneToMany(mappedBy = "modeullak", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ModeullakKeyword> keywords = new ArrayList<>();

    @OneToMany(mappedBy = "modeullak", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<UserModeullak> users = new ArrayList<>();

    @OneToMany(mappedBy = "modeullak", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Dialogue> dialogues = new ArrayList<>();

    /* -------------------------------------------- */
    /* Methods ------------------------------------ */
    /* -------------------------------------------- */
    @Builder
    public Modeullak(
            String title,
            String participationCode,
            LocalDateTime startedAt,
            LocalDateTime endedAt
    ) {
        this.title = title;
        this.participationCode = participationCode;
        this.llmStatus = ELLmStatus.BEFORE;

        this.startedAt = startedAt;
        this.endedAt = endedAt;
    }

    public void updateContent(String content) {
        this.content = content;
    }

    public void updateLLmStatus(ELLmStatus llmStatus) {
        this.llmStatus = llmStatus;
    }
}
