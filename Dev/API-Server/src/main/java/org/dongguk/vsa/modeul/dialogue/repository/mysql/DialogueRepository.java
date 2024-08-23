package org.dongguk.vsa.modeul.dialogue.repository.mysql;


import org.dongguk.vsa.modeul.dialogue.domain.mysql.Dialogue;
import org.dongguk.vsa.modeul.dialogue.domain.type.EDialogueStatus;
import org.dongguk.vsa.modeul.keyword.domain.mysql.Keyword;
import org.dongguk.vsa.modeul.modeullak.domain.mysql.Modeullak;
import org.dongguk.vsa.modeul.user.domain.mysql.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DialogueRepository extends JpaRepository<Dialogue, Long> {

    @EntityGraph(attributePaths = {"modeullak", "user"})
    Optional<Dialogue> findDialogueAndModeullakAndUserById(
            Long dialogueId
    );

    @EntityGraph(attributePaths = {"keyword"})
    Optional<Dialogue> findWithKeywordById(
            Long similarDialogId
    );

    @EntityGraph(attributePaths = {"user"})
    List<Dialogue> findAllByKeywordAndModeullakAndStatus(
            Keyword keyword,
            Modeullak modeullak,
            EDialogueStatus status
    );

    @EntityGraph(attributePaths = {"keyword"})
    List<Dialogue> findAllWithKeywordAllByKeywordInAndModeullak(
            List<Keyword> keywords,
            Modeullak modeullak
    );

    @EntityGraph(attributePaths = {"keyword"})
    List<Dialogue> findAllByUserAndModeullakAndStatus(
            User user,
            Modeullak modeullak,
            EDialogueStatus status
    );

    @EntityGraph(attributePaths = {"keyword"})
    List<Dialogue> findAllByModeullakAndStatusNot(
            Modeullak modeullak,
            EDialogueStatus status
    );

    @EntityGraph(attributePaths = {"keyword"})
    List<Dialogue> findAllByUserAndModeullakAndStatusNot(
            User targetUser,
            Modeullak modeullak,
            EDialogueStatus eDialogueStatus
    );

    @EntityGraph(attributePaths = {"modeullak"})
    Optional<Dialogue> findWithModeullakAndUserById(Long requestDialogId);
}
