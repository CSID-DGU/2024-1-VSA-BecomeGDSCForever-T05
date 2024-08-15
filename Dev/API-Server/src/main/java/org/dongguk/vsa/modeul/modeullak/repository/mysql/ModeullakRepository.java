package org.dongguk.vsa.modeul.modeullak.repository.mysql;

import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ModeullakRepository extends JpaRepository<Modeullak, Long> {

    @Query(
            "SELECT m " +
            "FROM Modeullak m join fetch m.users mu join fetch mu.user u " +
            "WHERE u.id = :accountId AND :currentAt BETWEEN m.startedAt AND m.endedAt"
    )
    Optional<Modeullak> findCurrentModeullakByAccountIdAndCurrentAtContentBetween(UUID accountId, LocalDateTime currentAt);
}
