package org.dongguk.vsa.modeul.modeullak.repository.mysql;

import org.dongguk.vsa.modeul.keyword.domain.mysql.Keyword;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakKeyword;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ModeullakKeywordRepository extends JpaRepository<ModeullakKeyword, Long> {

    Optional<ModeullakKeyword> findByModeullakAndKeyword(Modeullak modeullak, Keyword keyword);

    @EntityGraph(attributePaths = {"keyword"})
    Page<ModeullakKeyword> findWithKeywordByModeullak(Modeullak modeullak, Pageable pageable);
}
