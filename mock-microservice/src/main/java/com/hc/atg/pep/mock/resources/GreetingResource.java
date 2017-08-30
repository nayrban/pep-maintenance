package com.hc.atg.pep.mock.resources;

import org.springframework.stereotype.Component;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Component
@Path("greetings")
@Produces(APPLICATION_JSON)
public class GreetingResource {

    @GET
    public String getGreeting() {
        return "Hello";
    }
}
