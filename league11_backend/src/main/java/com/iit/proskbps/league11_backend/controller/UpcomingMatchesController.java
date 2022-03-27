package com.iit.proskbps.league11_backend.controller;

import com.iit.proskbps.league11_backend.service.UpcomingMatchesService;
import com.iit.proskbps.league11_backend.dto.BaseResponse;
import com.iit.proskbps.league11_backend.dto.MatchDetails;
import com.iit.proskbps.league11_backend.dto.SearchRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping(path = "/upcoming-matches")

public class UpcomingMatchesController {

    private UpcomingMatchesService upcomingMatchesService;

    @Autowired
    public UpcomingMatchesController(UpcomingMatchesService upcomingMatchesService) {
        this.upcomingMatchesService =upcomingMatchesService;
    }

    @PostMapping(path = "/search")
    @CrossOrigin
    public @ResponseBody
    BaseResponse<List<MatchDetails>> search(@Valid @RequestBody SearchRequest searchRequest) {
        return upcomingMatchesService.search(searchRequest);
    }

}

