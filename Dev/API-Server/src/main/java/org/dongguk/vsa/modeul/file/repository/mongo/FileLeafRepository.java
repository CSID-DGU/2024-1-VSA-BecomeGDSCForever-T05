package org.dongguk.vsa.modeul.file.repository.mongo;

import org.dongguk.vsa.modeul.file.domain.mongo.FileLeaf;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FileLeafRepository extends MongoRepository<FileLeaf, String> {
}
