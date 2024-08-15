package org.dongguk.vsa.modeul.user.domain.mysql;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.user.domain.type.EModeullakRole;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(
        name = "user_modeullaks",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "uk_user_modeullak",
                        columnNames = {"user_id", "modeullak_id"}
                )
        }
)
public class UserModeullak {

    /* -------------------------------------------- */
    /* Default Column ----------------------------- */
    /* -------------------------------------------- */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    /* -------------------------------------------- */
    /* Information Column ------------------------- */
    /* -------------------------------------------- */
    @Enumerated(EnumType.STRING)
    @Column(name="role", nullable = false)
    private EModeullakRole role;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, updatable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "modeullak_id", nullable = false, updatable = false)
    private Modeullak modeullak;

    /* -------------------------------------------- */
    /* Methods ------------------------------------ */
    /* -------------------------------------------- */
    @Builder
    public UserModeullak(
            EModeullakRole modeullakRole,
            User user,
            Modeullak modeullak
    ) {
        this.role = modeullakRole;
        this.user = user;
        this.modeullak = modeullak;
    }
}
