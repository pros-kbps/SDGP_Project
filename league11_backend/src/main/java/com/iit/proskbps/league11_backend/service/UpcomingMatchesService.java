package com.iit.proskbps.league11_backend.service;

import com.iit.proskbps.league11_backend.dto.*;
import com.iit.proskbps.league11_backend.fiegn.MatchSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class UpcomingMatchesService {


    private MatchSearchService matchSearchService;


    @Autowired
    public UpcomingMatchesService(MatchSearchService matchSearchService){
        this.matchSearchService = matchSearchService;
    }



    public BaseResponse<List<MatchDetails>> search(SearchRequest searchRequest){
        BaseResponse<List<MatchDetails>> baseResponse  = new BaseResponse<>();
        List<MatchDetails> matchDetails= new ArrayList() ;

        SearchResponse searchResponse = matchSearchService.getData("en",searchRequest.getTeam(), searchRequest.getMonth(), "true");

        for(int i=0; i<searchResponse.getContent().getMatches().size(); i++){
            Match match = searchResponse.getContent().getMatches().get(i);
            if(match.getFormat().equals("T20")){
                MatchDetails matchDetails1 = new MatchDetails();
                matchDetails1.setSlug(match.getSlug());
                SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MMM-dd");
                matchDetails1.setDate(formatter.format(match.getStartDate()));
                matchDetails1.setGround(match.getGround().getSmallName());
                matchDetails1.setTitle(match.getTitle());
                SimpleDateFormat formatter1 = new SimpleDateFormat("HH:mm");
                matchDetails1.setTime(formatter1.format(match.getStartTime()));
                matchDetails1.setTeam1(Integer.toString(match.getTeams().get(0).getTeam().getId()));
                matchDetails1.setTeam2(Integer.toString(match.getTeams().get(1).getTeam().getId()));
                matchDetails.add(matchDetails1);
            }
        }
        baseResponse.setData(matchDetails);
        baseResponse.setStatus(true);
        return baseResponse;
    }

}
