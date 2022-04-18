package com.iit.proskbps.league11_backend.fiegn;

import com.iit.proskbps.league11_backend.dto.PredictionRequest;
import com.iit.proskbps.league11_backend.dto.PredictionResponse;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@FeignClient(name = "predictionClient", url = "http://localhost:5000")
public interface PredictionCallService {

    @RequestMapping(method= RequestMethod.POST, value="/predict")
    public String getData(@RequestBody PredictionRequest predictionRequest);
}
