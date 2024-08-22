package org.dongguk.vsa.modeul.dialogue.repository.mysql;


import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.keyword.domain.mysql.Keyword;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DialogueRepository extends JpaRepository<Dialogue, Long> {

    @EntityGraph(attributePaths = {"modeullak"})
    Optional<Dialogue> findDialogueAndModeullakById(Long dialogueId);

    @EntityGraph(attributePaths = {"keyword"})
    List<Dialogue> findWithKeywordAllByKeywordInAndModeullak(List<Keyword> keywords, Modeullak modeullak);
}
