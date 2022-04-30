package com.iit.proskbps.league11_backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.iit.proskbps.league11_backend.dto.PredictionRequest;
import com.iit.proskbps.league11_backend.dto.SearchStatsRequest;
import com.iit.proskbps.league11_backend.service.PlayerStatsService;
import com.iit.proskbps.league11_backend.service.PredictionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PredictionController.class)
public class PredictionControllerTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper mapper;

    @MockBean
    PredictionService predictionService;

    @Test
    public void getPredictSuccess() throws Exception {
        PredictionRequest predictionRequest = new PredictionRequest("5","1","2","1","1");

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/prediction/predict")
                        .content(mapper.writeValueAsString(predictionRequest))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is2xxSuccessful());

    }
}

