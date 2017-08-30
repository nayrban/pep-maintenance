package com.hc.atg.pep.mock;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class MockApplication extends SpringBootServletInitializer{

    public static void main(String[] args) {
        new MockApplication()
                .configure(new SpringApplicationBuilder(MockApplication.class))
                .run(args);
    }
}
