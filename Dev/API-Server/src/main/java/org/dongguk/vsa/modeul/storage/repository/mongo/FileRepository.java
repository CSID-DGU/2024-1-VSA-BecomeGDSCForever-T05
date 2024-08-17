package org.dongguk.vsa.modeul.storage.repository.mongo;

import org.dongguk.vsa.modeul.storage.domain.mongo.File;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FileRepository extends MongoRepository<File, String> {
}
