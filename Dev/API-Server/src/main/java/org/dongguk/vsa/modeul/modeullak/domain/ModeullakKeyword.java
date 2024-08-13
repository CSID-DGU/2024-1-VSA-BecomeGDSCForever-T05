package org.dongguk.vsa.modeul.modeullak.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.keyword.domain.Keyword;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "modeullak_keywords")
public class ModeullakKeyword {
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
    @Column(name = "content", length = 20, nullable = false)
    private String content;


    /* -------------------------------------------- */
    /* Many To One Mapping ------------------------ */
    /* -------------------------------------------- */
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "modeullak_id", nullable = false)
    private Modeullak modeullak;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "keyword_id", nullable = false)
    private Keyword keyword;


    @Builder
    public ModeullakKeyword(String content, Modeullak modeullak, Keyword keyword) {
        this.content = content;
        this.modeullak = modeullak;
        this.keyword = keyword;

        modeullak.addModeullakKeywords(this);
        keyword.addModeullakKeywords(this);
    }

}
