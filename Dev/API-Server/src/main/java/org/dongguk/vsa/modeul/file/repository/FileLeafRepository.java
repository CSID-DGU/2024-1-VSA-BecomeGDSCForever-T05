package org.dongguk.vsa.modeul.file.repository;

import org.dongguk.vsa.modeul.file.domain.FileLeaf;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FileLeafRepository extends MongoRepository<FileLeaf, String> {
}
