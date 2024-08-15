package org.dongguk.vsa.modeul.modeullak.repository.mysql;

import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
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
            "FROM Modeullak m JOIN FETCH m.users mu JOIN FETCH mu.user u " +
            "WHERE u.id = :accountId AND m.status = :status AND :currentAt BETWEEN m.startedAt AND m.endedAt"
    )
    Optional<Modeullak> findCurrentModeullakByAccountIdAndStatusAndCurrentAtContentBetween(
            UUID accountId,
            EModeullakStatus status,
            LocalDateTime currentAt
    );

    Optional<Modeullak> findByIdAndStatus(Long modeullakId, EModeullakStatus status);

    Optional<Modeullak> findByIdAndStatusNot(Long modeullakId, EModeullakStatus status);
}
