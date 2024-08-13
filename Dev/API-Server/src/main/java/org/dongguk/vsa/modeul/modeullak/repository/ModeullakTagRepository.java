package org.dongguk.vsa.modeul.modeullak.repository;

import org.dongguk.vsa.modeul.modeullak.domain.ModeullakTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModeullakTagRepository extends JpaRepository<ModeullakTag, Long> {
}
