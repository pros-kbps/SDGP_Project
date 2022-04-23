package com.iit.proskbps.league11_backend.service;

import com.iit.proskbps.league11_backend.dto.*;
import com.iit.proskbps.league11_backend.fiegn.StatsSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlayerStatsService {

    private StatsSearchService statsSearchService;

    @Autowired
    public PlayerStatsService(StatsSearchService statsSearchService){
        this.statsSearchService = statsSearchService;
    }

    public BaseResponse<List<Player>> search(SearchStatsRequest searchStatsRequest){
        BaseResponse<List<Player>> baseResponse = new BaseResponse<>();

        SearchStatsResponse searchStatsResponse =  statsSearchService.getData(searchStatsRequest.getTeam());

        baseResponse.setData(searchStatsResponse.getContent().getPlayers().getResults());


        return baseResponse;
    }

    public BaseResponse<PlayerStats> getPlayer(String playerId){
        BaseResponse<PlayerStats> baseResponse = new BaseResponse<>();
        SearchStatsResponse searchStatsResponse =  statsSearchService.getPlayerDetails(playerId);
        SearchStatsResponse searchStatsSummaryResponse =  statsSearchService.getPlayerStats(playerId,"3","BATTING");

        for(int i=0; i< searchStatsSummaryResponse.getSummary().getGroups().size(); i++){
            if(searchStatsSummaryResponse.getSummary().getGroups().get(i).getType().equals("CAREER_AVERAGES")){
                searchStatsResponse.getPlayer().setCareerAvg(searchStatsSummaryResponse.getSummary().getGroups().get(i).getStats());
            }
            if(searchStatsSummaryResponse.getSummary().getGroups().get(i).getType().equals("OPPOSITION_TEAM")){
                searchStatsResponse.getPlayer().setVsTeamStats(searchStatsSummaryResponse.getSummary().getGroups().get(i).getStats());
            }
        }
        if(searchStatsResponse.getPlayer().getVsTeamStats()== null){
            searchStatsResponse.getPlayer().setVsTeamStats(new ArrayList<>());
        }
        if(searchStatsResponse.getPlayer().getCareerAvg()== null){
            searchStatsResponse.getPlayer().setCareerAvg(new ArrayList<>());
        }
        baseResponse.setData(searchStatsResponse.getPlayer());


        return baseResponse;
    }

}
