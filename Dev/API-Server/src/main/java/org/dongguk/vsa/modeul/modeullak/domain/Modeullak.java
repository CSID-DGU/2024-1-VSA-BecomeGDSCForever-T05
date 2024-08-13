package org.dongguk.vsa.modeul.modeullak.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.dialogue.domain.Dialogue;
import org.dongguk.vsa.modeul.modeullak.domain.type.ELLmStatus;
import org.dongguk.vsa.modeul.user.domain.UserModeullak;

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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    /* -------------------------------------------- */
    /* Information Attribute ---------------------- */
    /* -------------------------------------------- */
    @Column(name = "title", length = 20, nullable = false)
    private String title;

    @Column(name = "content", length = 1000, nullable = false)
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(name = "llm_status", nullable = false)
    private ELLmStatus llmStatus;

    @Column(name = "started_at", nullable = false)
    private LocalDateTime startedAt;

    @Column(name = "ended_at", nullable = false)
    private LocalDateTime endedAt;

    /* -------------------------------------------- */
    /* One to Many Mapping ------------------------ */
    /* -------------------------------------------- */
    @OneToMany(mappedBy = "modeullak", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ModeullakTag> modeullakTags = new ArrayList<>();

    @OneToMany(mappedBy = "modeullak", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ModeullakKeyword> modeullakKeywords = new ArrayList<>();

    @OneToMany(mappedBy = "modeullak", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<UserModeullak> userModeullaks = new ArrayList<>();

    @OneToMany(mappedBy = "modeullak", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Dialogue> dialogues = new ArrayList<>();


    @Builder
    public Modeullak(String title, String content, ELLmStatus llmStatus, LocalDateTime startedAt, LocalDateTime endedAt) {
        this.title = title;
        this.content = content;
        this.llmStatus = llmStatus;
        this.startedAt = startedAt;
        this.endedAt = endedAt;
    }

    public void updateLLmStatus(ELLmStatus llmStatus) {
        this.llmStatus = llmStatus;
    }

    public void addModeullakTags(ModeullakTag modeullakTag) {
        this.modeullakTags.add(modeullakTag);
    }

    public void addModeullakKeywords(ModeullakKeyword modeullakKeyword) {
        this.modeullakKeywords.add(modeullakKeyword);
    }

    public void addUserModeullaks(UserModeullak userModeullak) {
        this.userModeullaks.add(userModeullak);
    }

    public void addDialogues(Dialogue dialogue) {
        this.dialogues.add(dialogue);
    }
}
