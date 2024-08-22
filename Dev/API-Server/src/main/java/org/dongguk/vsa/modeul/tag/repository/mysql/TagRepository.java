package org.dongguk.vsa.modeul.tag.repository.mysql;

import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.tag.domain.mysql.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {

    List<Tag> findAllByNameIn(List<String> names);

    @Query(
            "SELECT t " +
            "FROM Tag t JOIN FETCH t.modeullaks mt JOIN FETCH mt.modeullak m " +
            "WHERE m IN :modeullaks"
    )
    List<Tag> findAllByModeullaks(
            @Param("modeullaks") List<Modeullak> modeullaks
    );
}
