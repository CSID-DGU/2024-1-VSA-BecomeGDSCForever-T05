package org.dongguk.vsa.modeul;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@EnableAsync
@EnableJpaRepositories(basePackages = "org.dongguk.vsa.modeul.*.repository.mysql")
@EnableMongoRepositories(basePackages = "org.dongguk.vsa.modeul.*.repository.mongo")
@SpringBootApplication
public class ModeulApplication {

    public static void main(String[] args) {
        SpringApplication.run(ModeulApplication.class, args);
    }

}
