package com.iit.proskbps.league11_backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.iit.proskbps.league11_backend.dto.SearchStatsRequest;
import com.iit.proskbps.league11_backend.service.PlayerStatsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PlayerStatsController.class)
public class PlayerStatsControllerTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper mapper;

    @MockBean
    PlayerStatsService playerStatsService;

    @Test
    public void getPlayerSuccess() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/team-players/player/46597")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is2xxSuccessful());

    }

    @Test
    public void getTeamPlayersSuccess() throws Exception {
        SearchStatsRequest searchStatsRequest = new SearchStatsRequest();
        searchStatsRequest.setTeam("1");

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/team-players/search")
                        .content(mapper.writeValueAsString(searchStatsRequest))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is2xxSuccessful());

    }



}

