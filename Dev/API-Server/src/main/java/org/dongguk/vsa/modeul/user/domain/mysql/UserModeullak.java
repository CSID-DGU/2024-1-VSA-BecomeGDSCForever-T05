package org.dongguk.vsa.modeul.user.domain.mysql;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.user.domain.type.EModuellakRole;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "user_modeullaks")
public class UserModeullak {

    /* -------------------------------------------- */
    /* Default Column ----------------------------- */
    /* -------------------------------------------- */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    /* -------------------------------------------- */
    /* Information Column ------------------------- */
    /* -------------------------------------------- */
    @Enumerated(EnumType.STRING)
    @Column(name="role", nullable = false)
    private EModuellakRole moduellakRole;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "modeullak_id", nullable = false)
    private Modeullak modeullak;

    @Builder
    public UserModeullak(EModuellakRole moduellakRole, User user, Modeullak modeullak) {
        this.moduellakRole = moduellakRole;
        this.user = user;
        this.modeullak = modeullak;

        user.addUserModeullaks(this);
        modeullak.addUserModeullaks(this);
    }
}
