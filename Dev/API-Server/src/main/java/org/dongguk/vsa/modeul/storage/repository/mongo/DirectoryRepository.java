package org.dongguk.vsa.modeul.storage.repository.mongo;

import org.dongguk.vsa.modeul.storage.domain.mongo.Directory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DirectoryRepository extends MongoRepository<Directory, String> {
}
