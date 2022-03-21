package com.example.league11_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class League11BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(League11BackendApplication.class, args);
    }
}
