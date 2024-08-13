package org.dongguk.vsa.modeul.keyword.repository;

import org.dongguk.vsa.modeul.keyword.domain.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeyWordRepository extends JpaRepository<Keyword, Long> {
}
