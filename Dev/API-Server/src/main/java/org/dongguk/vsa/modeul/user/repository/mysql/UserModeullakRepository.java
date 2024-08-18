package org.dongguk.vsa.modeul.user.repository.mysql;

import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserModeullakRepository extends JpaRepository<UserModeullak, Long> {

    Optional<UserModeullak> findByUserAndModeullak(User user, Modeullak modeullak);

    @EntityGraph(attributePaths = {"user", "modeullak"})
    Optional<UserModeullak> findWithUserAndModeullakById(Long id);

    @EntityGraph(attributePaths = {"user"})
    List<UserModeullak> findAllWithUserByModeullakAndUserNot(Modeullak modeullak, User user);
}
