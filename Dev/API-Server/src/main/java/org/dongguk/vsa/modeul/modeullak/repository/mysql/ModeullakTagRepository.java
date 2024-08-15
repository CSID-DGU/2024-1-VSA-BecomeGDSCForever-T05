package org.dongguk.vsa.modeul.modeullak.repository.mysql;

import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.ModeullakTag;
import org.dongguk.vsa.modeul.tag.domain.mysql.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ModeullakTagRepository extends JpaRepository<ModeullakTag, Long> {


    @Query(
            "SELECT mt " +
            "FROM ModeullakTag mt JOIN FETCH mt.tag t " +
            "WHERE mt.modeullak IN :modeullaks"
    )
    List<ModeullakTag> findAllByModeullakIn(List<Modeullak> modeullaks);
}
