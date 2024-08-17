package org.dongguk.vsa.modeul.storage.domain.mongo;

import org.dongguk.vsa.modeul.storage.domain.type.EStorageType;

public interface Storage {
    String getTitle();
    String getExtension();
    EStorageType getType();
}


