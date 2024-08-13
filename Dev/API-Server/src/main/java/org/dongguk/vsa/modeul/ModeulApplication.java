package org.dongguk.vsa.modeul;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication
public class ModeulApplication {

    public static void main(String[] args) {
        SpringApplication.run(ModeulApplication.class, args);
    }

}
