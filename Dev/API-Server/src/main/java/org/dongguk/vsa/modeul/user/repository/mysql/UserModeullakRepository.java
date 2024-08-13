package org.dongguk.vsa.modeul.user.repository.mysql;

import org.dongguk.vsa.modeul.user.domain.mysql.UserModeullak;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserModeullakRepository extends JpaRepository<UserModeullak, Long> {
}
