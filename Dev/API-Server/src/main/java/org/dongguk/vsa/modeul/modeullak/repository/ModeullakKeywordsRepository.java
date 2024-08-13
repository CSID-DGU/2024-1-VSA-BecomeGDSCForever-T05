package org.dongguk.vsa.modeul.modeullak.repository;

import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakKeyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModeullakKeywordsRepository extends JpaRepository<ModeullakKeyword, Long> {
}
