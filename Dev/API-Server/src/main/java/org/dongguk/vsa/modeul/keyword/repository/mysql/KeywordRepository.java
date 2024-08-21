package org.dongguk.vsa.modeul.keyword.repository.mysql;

import org.dongguk.vsa.modeul.keyword.domain.mysql.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeywordRepository extends JpaRepository<Keyword, Long> {
}
