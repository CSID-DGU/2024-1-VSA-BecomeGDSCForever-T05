package org.dongguk.vsa.modeul.user.repository.mysql;

import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakUser;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserModeullakRepository extends JpaRepository<ModeullakUser, Long> {

    Optional<ModeullakUser> findByUserAndModeullak(User user, Modeullak modeullak);
}
