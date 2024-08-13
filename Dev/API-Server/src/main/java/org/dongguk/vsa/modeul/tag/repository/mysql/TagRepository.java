package org.dongguk.vsa.modeul.tag.repository.mysql;

import org.dongguk.vsa.modeul.tag.domain.mysql.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
}
