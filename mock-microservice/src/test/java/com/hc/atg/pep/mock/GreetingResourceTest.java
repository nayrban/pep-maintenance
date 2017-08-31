package com.hc.atg.pep.mock;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class GreetingResourceTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void greetingStatus() {
        ResponseEntity<String> entity = this.restTemplate.getForEntity("/greetings",
                String.class);
        assertThat(entity.getStatusCode()).isEqualTo(HttpStatus.OK);
    }


    @Test
    public void greetingResponse() {
        ResponseEntity<String> entity = this.restTemplate.getForEntity("/greetings",
                String.class);
        assertThat(entity.getBody()).isEqualTo("Hello");
    }
}
