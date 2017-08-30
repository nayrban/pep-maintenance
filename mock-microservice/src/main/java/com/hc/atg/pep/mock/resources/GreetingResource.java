package com.hc.atg.pep.mock.resources;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("greetings")
@Produces(APPLICATION_JSON)
public class GreetingResource {

    @GET
    public String getGreeting() {
        return "Hello";
    }
}
