package org.dongguk.vsa.modeul.security.repository.mysql;

import org.dongguk.vsa.modeul.security.domain.mysql.Account;
import org.dongguk.vsa.modeul.security.domain.type.ESecurityProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface AccountRepository extends JpaRepository<Account, UUID> {

    Optional<Account> findBySerialId(String serialId);

    Optional<Account> findBySerialIdAndProvider(String serialId, ESecurityProvider provider);
}
