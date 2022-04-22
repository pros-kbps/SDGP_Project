package com.iit.proskbps.league11_backend.controller;

import com.iit.proskbps.league11_backend.dto.*;
import com.iit.proskbps.league11_backend.service.PlayerStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@Controller
@RequestMapping(path = "/team-players")

public class PlayerStatsController {

    private PlayerStatsService playerStatsService;

    @Autowired
    public PlayerStatsController(PlayerStatsService playerStatsService){
        this.playerStatsService = playerStatsService;
    }

    @PostMapping(path = "/search")
    @CrossOrigin
    public @ResponseBody
    BaseResponse<List<Player>> search(@Valid @RequestBody SearchStatsRequest searchStatsRequest) {
        return playerStatsService.search(searchStatsRequest);
    }

    @GetMapping(path = "/player/{playerId}")
    @CrossOrigin
    public @ResponseBody
    BaseResponse<PlayerStats> getPlayerDetails(@PathVariable("playerId") String playerId) {
        return playerStatsService.getPlayer(playerId);
    }

}
