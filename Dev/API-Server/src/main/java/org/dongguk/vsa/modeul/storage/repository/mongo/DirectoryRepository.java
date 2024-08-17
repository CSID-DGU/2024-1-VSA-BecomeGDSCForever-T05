package org.dongguk.vsa.modeul.storage.repository.mongo;

import org.dongguk.vsa.modeul.storage.domain.mongo.Directory;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DirectoryRepository extends MongoRepository<Directory, String> {
}
