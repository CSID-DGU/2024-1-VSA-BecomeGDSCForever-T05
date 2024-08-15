package org.dongguk.vsa.modeul.modeullak.domain.mysql;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakRole;
import org.dongguk.vsa.modeul.user.domain.mysql.User;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(
        name = "modeullak_users",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "uk_modeullak_user",
                        columnNames = {"modeullak_id", "user_id"}
                )
        }
)
public class ModeullakUser {

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

    /* -------------------------------------------- */
    /* Many To One Mapping ------------------------ */
    /* -------------------------------------------- */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "modeullak_id", nullable = false, updatable = false)
    private Modeullak modeullak;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, updatable = false)
    private User user;

    /* -------------------------------------------- */
    /* Methods ------------------------------------ */
    /* -------------------------------------------- */
    @Builder
    public ModeullakUser(
            EModeullakRole modeullakRole,
            User user,
            Modeullak modeullak
    ) {
        this.role = modeullakRole;
        this.user = user;

        this.modeullak = modeullak;
    }
}
