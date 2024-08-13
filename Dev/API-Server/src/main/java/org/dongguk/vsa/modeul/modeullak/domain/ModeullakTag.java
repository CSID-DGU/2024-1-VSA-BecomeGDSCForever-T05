package org.dongguk.vsa.modeul.modeullak.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.tag.domain.Tag;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "modeullak_tags")
public class ModeullakTag {

    /* -------------------------------------------- */
    /* Default Column ----------------------------- */
    /* -------------------------------------------- */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    /* -------------------------------------------- */
    /* Many To One Mapping ------------------------ */
    /* -------------------------------------------- */
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "modeullak_id", nullable = false)
    private Modeullak modeullak;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "tag_id", nullable = false)
    private Tag tag;

    @Builder
    public ModeullakTag(Modeullak modeullak, Tag tag) {
        this.modeullak = modeullak;
        this.tag = tag;

        modeullak.addModeullakTags(this);
        tag.addModuellakTags(this);
    }
}
