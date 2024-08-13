package org.dongguk.vsa.modeul.dialogue.repository;


import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DialogueRepository extends JpaRepository<Dialogue, Long> {
}
