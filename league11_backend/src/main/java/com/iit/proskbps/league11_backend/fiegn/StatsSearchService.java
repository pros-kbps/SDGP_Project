package com.iit.proskbps.league11_backend.fiegn;

import com.iit.proskbps.league11_backend.dto.SearchResponse;
import com.iit.proskbps.league11_backend.dto.SearchStatsResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "espn1", url = "https://hs-consumer-api.espncricinfo.com/v1")
public interface StatsSearchService {

    @RequestMapping(method= RequestMethod.GET, value="/pages/player")
    public SearchStatsResponse getData(@RequestParam("teamId") String teamId);

    @RequestMapping(method= RequestMethod.GET, value="/pages/player/home")
    public SearchStatsResponse getPlayerDetails(@RequestParam("playerId") String playerId);

    @RequestMapping(method= RequestMethod.GET, value="/pages/player/stats/summary")
    public SearchStatsResponse getPlayerStats(@RequestParam("playerId") String playerId,@RequestParam("recordClassId") String recordClassId,@RequestParam("type") String type);

}
