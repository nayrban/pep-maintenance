package com.hc.atg.pep.mock.config;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class JerseyConfig extends ResourceConfig{

    @Autowired
    public JerseyConfig(ApplicationProperties applicationProperties) {
        packages(applicationProperties.getResourcesPackage());
    }
}
