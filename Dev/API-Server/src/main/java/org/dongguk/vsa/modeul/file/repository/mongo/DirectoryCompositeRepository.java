package org.dongguk.vsa.modeul.file.repository.mongo;

import org.dongguk.vsa.modeul.file.domain.mongo.DirectoryComposite;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DirectoryCompositeRepository extends MongoRepository<DirectoryComposite, String> {
}
