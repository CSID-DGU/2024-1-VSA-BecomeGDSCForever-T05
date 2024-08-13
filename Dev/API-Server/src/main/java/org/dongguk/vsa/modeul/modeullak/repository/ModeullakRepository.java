package org.dongguk.vsa.modeul.modeullak.repository;

import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModeullakRepository extends JpaRepository<Modeullak, Long> {
}
