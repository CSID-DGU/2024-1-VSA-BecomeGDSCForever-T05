package org.dongguk.vsa.modeul.file.repository;

import org.dongguk.vsa.modeul.file.domain.DirectoryComposite;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DirectoryCompositeRepository extends MongoRepository<DirectoryComposite, String> {
}
