package com.iit.proskbps.league11_backend.service;

import com.iit.proskbps.league11_backend.dto.BaseResponse;
import com.iit.proskbps.league11_backend.dto.PredictionRequest;
import com.iit.proskbps.league11_backend.dto.PredictionResponse;
import com.iit.proskbps.league11_backend.fiegn.PredictionCallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PredictionService {

    @Autowired
    public PredictionService(PredictionCallService loadBalancer) {

        this.loadBalancer = loadBalancer;
    }

    private PredictionCallService loadBalancer;

    public String get(){
        return "OK";
    }

    public BaseResponse<PredictionResponse> predict(PredictionRequest predictionRequest){

        BaseResponse<PredictionResponse> result = new BaseResponse<>();

        try {
            String predict = loadBalancer.getData(predictionRequest).getBody();
            System.out.println(predict);
            result.setStatus(true);
            PredictionResponse predictionResponse = new PredictionResponse();
            predictionResponse.setWinningTeam(predict);
            result.setData(predictionResponse);

        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println(ex.getMessage());
            result.setStatus(false);
            result.setErrorMsg("Error Occurred.");
        }
        return result;
    }


}

