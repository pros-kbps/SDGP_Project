package com.iit.proskbps.league11_backend.controller;

import com.iit.proskbps.league11_backend.dto.BaseResponse;
import com.iit.proskbps.league11_backend.dto.PredictionRequest;
import com.iit.proskbps.league11_backend.dto.PredictionResponse;
import com.iit.proskbps.league11_backend.service.PredictionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping(path = "/prediction")

public class PredictionController {

    private PredictionService predictionService;

    @Autowired
    public PredictionController(PredictionService predictionService) {
        this.predictionService =predictionService;
    }

    @PostMapping(path = "/predict")
    @CrossOrigin
    public @ResponseBody
    BaseResponse<PredictionResponse> predict(@Valid @RequestBody PredictionRequest predictionRequest) {
        return predictionService.predict(predictionRequest);
    }

}

