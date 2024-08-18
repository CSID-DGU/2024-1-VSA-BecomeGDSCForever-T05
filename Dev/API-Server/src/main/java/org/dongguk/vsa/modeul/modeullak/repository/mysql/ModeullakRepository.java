package org.dongguk.vsa.modeul.modeullak.repository.mysql;

import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.type.EModeullakStatus;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
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
            @Param("accountId") UUID accountId,
            @Param("status") EModeullakStatus status,
            @Param("currentAt") LocalDateTime currentAt
    );

    @EntityGraph(attributePaths = {"tags", "tags.tag"})
    Optional<Modeullak> findWithTagsById(Long modeullakId);

    @EntityGraph(attributePaths = {"tags", "tags.tag"})
    Optional<Modeullak> findByParticipationCode(String participationCode);

    @Query(
            "SELECT m " +
            "FROM Modeullak m JOIN FETCH m.users mu JOIN FETCH mu.user u " +
            "WHERE u.id = :accountId AND m.status = :status AND m.startedAt BETWEEN :startedAt AND :endedAt"
    )
    List<Modeullak> findAllModeullaksByAccountIdAndStatusAndWhichAt(
            @Param("accountId") UUID accountId,
            @Param("status") EModeullakStatus status,
            @Param("startedAt") LocalDateTime startedAt,
            @Param("endedAt") LocalDateTime endedAt
    );
}
