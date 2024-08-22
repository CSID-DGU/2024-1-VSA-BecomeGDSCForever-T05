package org.dongguk.vsa.modeul;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.TimeZone;


@EnableAsync
@EnableJpaRepositories(basePackages = "org.dongguk.vsa.modeul.*.repository.mysql")
@EnableMongoRepositories(basePackages = "org.dongguk.vsa.modeul.*.repository.mongo")
@SpringBootApplication
public class ModeulApplication {

    @PostConstruct
    public void init() {
        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
    }

    public static void main(String[] args) {
        SpringApplication.run(ModeulApplication.class, args);
    }

}
