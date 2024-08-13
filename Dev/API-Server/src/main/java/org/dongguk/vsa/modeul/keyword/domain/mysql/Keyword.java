package org.dongguk.vsa.modeul.keyword.domain.mysql;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakKeyword;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "keywords")
public class Keyword {

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

    @Column(name = "name", length = 32, nullable = false)
    private String name;

    @Column(name="created_at", nullable = false)
    private LocalDateTime createdAt;


    /* -------------------------------------------- */
    /* One To Many Mapping ------------------------ */
    /* -------------------------------------------- */
    @OneToMany(mappedBy = "keyword", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<ModeullakKeyword> modeullakKeywords = new ArrayList<>();

    @OneToMany(mappedBy = "keyword", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Dialogue> dialogues = new ArrayList<>();

    @Builder
    public Keyword(String name) {
        this.name = name;
        this.createdAt = LocalDateTime.now();
    }

    public void addModeullakKeywords(ModeullakKeyword modeullakKeyword) {
        this.modeullakKeywords.add(modeullakKeyword);
    }

    public void addDialogues(Dialogue dialogue) {
        this.dialogues.add(dialogue);
    }

    public void deleteDialogues(Dialogue dialogue) {
        this.dialogues.remove(dialogue);
    }

    public void deleteModeulKeywords(ModeullakKeyword modeullakKeyword) {
        this.modeullakKeywords.remove(modeullakKeyword);
    }
}
