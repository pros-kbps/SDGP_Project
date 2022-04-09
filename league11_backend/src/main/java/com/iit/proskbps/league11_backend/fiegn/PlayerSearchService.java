package com.iit.proskbps.league11_backend.fiegn;

import com.iit.proskbps.league11_backend.dto.SearchResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@FeignClient(name = "espn", url = "https://hs-consumer-api.espncricinfo.com/v1")
public interface PlayerSearchService {
    @RequestMapping(method= RequestMethod.GET, value="/pages/team/schedule")
    public SearchResponse getData(@RequestParam("teamId") String teamId);
}

