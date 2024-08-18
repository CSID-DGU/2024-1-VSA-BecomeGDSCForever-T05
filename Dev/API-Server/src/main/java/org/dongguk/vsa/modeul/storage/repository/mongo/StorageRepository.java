package org.dongguk.vsa.modeul.storage.repository.mongo;

import org.dongguk.vsa.modeul.storage.domain.mongo.Storage;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StorageRepository extends MongoRepository<Storage, String> {
    List<Storage> findByUserModeullakId(Long userModeullakId);

    List<Storage> findByParentId(String parentId);
}
