package org.dongguk.vsa.modeul.modeullak.repository.mysql;

import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakKeyword;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModeullakKeywordRepository extends JpaRepository<ModeullakKeyword, Long> {
    @EntityGraph(attributePaths = {"keyword"})
    Page<ModeullakKeyword> findWithKeywordByModeullak(Modeullak modeullak, Pageable pageable);
}
