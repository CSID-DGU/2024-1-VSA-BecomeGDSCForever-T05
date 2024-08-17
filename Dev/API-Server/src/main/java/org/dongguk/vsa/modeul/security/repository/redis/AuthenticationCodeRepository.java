package org.dongguk.vsa.modeul.security.repository.redis;

import org.dongguk.vsa.modeul.security.domain.redis.AuthenticationCode;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthenticationCodeRepository extends CrudRepository<AuthenticationCode, String>{
}
