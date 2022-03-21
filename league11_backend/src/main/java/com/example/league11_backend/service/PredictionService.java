package com.example.league11_backend.service;

import com.example.league11_backend.dto.BaseResponse;
import com.example.league11_backend.dto.PredictionRequest;
import com.example.league11_backend.dto.PredictionResponse;
import com.example.league11_backend.fiegn.PredictionCallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PredictionService {

    @Autowired
    public PredictionService() {

    }
    @Autowired
    private PredictionCallService loadBalancer;

    public BaseResponse<PredictionResponse> predict(PredictionRequest predictionRequest){

        BaseResponse<PredictionResponse> result = new BaseResponse<>();

        try {
            PredictionResponse predict = loadBalancer.getData(predictionRequest);
            System.out.println(predict.getWinningTeam());
            result.setStatus(true);
            result.setData(predict);

        } catch (Exception ex) {
            System.out.println(ex);
            result.setStatus(false);
            result.setErrorMsg("You are entered invalid Inputs.");
        }
        return result;
    }


}

