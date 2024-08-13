package org.dongguk.vsa.modeul.user.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.dongguk.vsa.modeul.dialogue.domain.Dialogue;
import org.dongguk.vsa.modeul.user.domain.type.ESecurityProvider;
import org.dongguk.vsa.modeul.user.domain.type.ESecurityRole;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "users")
@DynamicUpdate
public class User {
    /* -------------------------------------------- */
    /* Default Column ----------------------------- */
    /* -------------------------------------------- */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;

    /* -------------------------------------------- */
    /* Security Column ---------------------------- */
    /* -------------------------------------------- */
    @Enumerated(EnumType.STRING)
    @Column(name = "provider", nullable = false, updatable = false)
    private ESecurityProvider provider;

    @Column(name = "serial_id", length = 320, nullable = false, updatable = false)
    private String serialId;

    @Column(name = "password", length = 320, nullable = false)
    private String password;

    /* -------------------------------------------- */
    /* Spring Authority Column -------------------- */
    /* -------------------------------------------- */
    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private ESecurityRole role;

    /* -------------------------------------------- */
    /* Information Column ------------------------- */
    /* -------------------------------------------- */
    @Column(name = "nickname", length = 12, nullable = false)
    private String nickname;

    @Column(name = "profile_image_url", length = 320, nullable = false)
    private String profileImageUrl;

    /* -------------------------------------------- */
    /* Timestamp Column --------------------------- */
    /* -------------------------------------------- */
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDate createdAt;


    /* -------------------------------------------- */
    /* One To Many Mapping ------------------------ */
    /* -------------------------------------------- */
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<UserModeullak> userModeullaks = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Dialogue> dialogues = new ArrayList<>();

    @Builder
    public User(
            ESecurityProvider provider,
            String serialId,
            String password,
            ESecurityRole role,
            String nickname,
            String profileImageUrl
    ) {
        this.provider = provider;
        this.serialId = serialId;
        this.password = password;
        this.role = role;
        this.nickname = nickname;
        this.profileImageUrl = profileImageUrl;
        this.createdAt = LocalDate.now();
    }

    public void updatePassword(String password) {
        this.password = password;
    }

    public void updateRole(ESecurityRole role) {
        this.role = role;
    }

    public void updateNickname(String nickname) {
        this.nickname = nickname;
    }

    public void updateProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }

    public void addDialogues(Dialogue dialogue) {
        this.dialogues.add(dialogue);
    }

    public void addUserModeullaks(UserModeullak userModeullak) {
        this.userModeullaks.add(userModeullak);
    }


}
