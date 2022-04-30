package com.iit.proskbps.league11_backend.dto;

import java.util.List;

public class Groups {

    private String type;

    private List<Stats> stats;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<Stats> getStats() {
        return stats;
    }

    public void setStats(List<Stats> stats) {
        this.stats = stats;
    }
}
