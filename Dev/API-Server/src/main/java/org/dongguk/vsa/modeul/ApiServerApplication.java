package org.dongguk.vsa.modeul;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableJpaRepositories(basePackages = {
        "org.dongguk.vsa.modeul.dialogue",
        "org.dongguk.vsa.modeul.keyword",
        "org.dongguk.vsa.modeul.modeullak",
        "org.dongguk.vsa.modeul.tag",
        "org.dongguk.vsa.modeul.user"
})
@EnableMongoRepositories(basePackages = "org.dongguk.vsa.modeul.file")
@SpringBootApplication
public class ApiServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiServerApplication.class, args);
    }

}
