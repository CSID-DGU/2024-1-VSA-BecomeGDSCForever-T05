package org.dongguk.vsa.modeul.tag.repository.mysql;

import org.dongguk.vsa.modeul.tag.domain.mysql.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {

    List<Tag> findAllByNameIn(List<String> names);
}
