package com.iit.proskbps.league11_backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.iit.proskbps.league11_backend.dto.SearchRequest;
import com.iit.proskbps.league11_backend.dto.SearchStatsRequest;
import com.iit.proskbps.league11_backend.fiegn.MatchSearchService;
import com.iit.proskbps.league11_backend.service.PlayerStatsService;
import com.iit.proskbps.league11_backend.service.UpcomingMatchesService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UpcomingMatchesController.class)
public class UpcomingMatchesControllerTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper mapper;

    @MockBean
    UpcomingMatchesService upcomingMatchesService;

    @Test
    public void getMatchesSuccess() throws Exception {
        SearchRequest searchRequest = new SearchRequest();
        searchRequest.setTeam("1");

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/upcoming-matches/search")
                        .content(mapper.writeValueAsString(searchRequest))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is2xxSuccessful());

    }



}

