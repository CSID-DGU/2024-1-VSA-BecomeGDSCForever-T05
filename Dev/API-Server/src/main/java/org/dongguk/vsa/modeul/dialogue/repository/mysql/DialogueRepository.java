package org.dongguk.vsa.modeul.dialogue.repository.mysql;


import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DialogueRepository extends JpaRepository<Dialogue, Long> {

    @EntityGraph(attributePaths = {"modeullak"})
    Optional<Dialogue> findDialogueAndModeullakById(Long dialogueId);
}
