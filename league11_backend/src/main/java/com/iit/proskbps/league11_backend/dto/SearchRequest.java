package com.iit.proskbps.league11_backend.dto;

public class SearchRequest {
    private String team;
    private String month;

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }
}
