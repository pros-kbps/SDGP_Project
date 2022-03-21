package com.example.league11_backend.fiegn;

import com.example.league11_backend.dto.PredictionRequest;
import com.example.league11_backend.dto.PredictionResponse;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Date;


@FeignClient(value = "predict", url = "http://predict.free.beeceptor.com")
public interface PredictionCallService {

    @RequestMapping(method= RequestMethod.POST, value="/predict")
    public PredictionResponse getData(@RequestBody PredictionRequest predictionRequest);
}
