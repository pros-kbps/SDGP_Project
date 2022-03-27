package com.iit.proskbps.league11_backend.service;

import com.iit.proskbps.league11_backend.model.Data;
import com.iit.proskbps.league11_backend.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataService {

    @Autowired
    public DataService(DataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    private DataRepository dataRepository;

    public Data searchByDate(String date){
        return dataRepository.findByDate(date);

    }

    public List<Data> getAllData(){
        return dataRepository.findAll();
    }

    public Data addNewData(Data data){
        dataRepository.save(data);
        return data;
    }

}
