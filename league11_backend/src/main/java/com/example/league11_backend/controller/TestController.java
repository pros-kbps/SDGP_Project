package com.example.league11_backend.controller;

import com.example.league11_backend.model.Data;
import com.example.league11_backend.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "/test")

public class TestController {

    @Autowired
    public TestController(DataService dataService) {
        this.dataService =dataService;
    }

    private DataService dataService;

    @PostMapping(path = "/add")
    public @ResponseBody
    Data addNewData(@RequestBody Data data) {
        return dataService.addNewData(data);
    }

    @GetMapping(path = "/all")
    public @ResponseBody
    List<Data> getAllData() {
        return dataService.getAllData();
    }
}
