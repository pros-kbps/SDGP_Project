package com.iit.proskbps.league11_backend.dto;

import java.util.List;

public class SinglePlayerStats {
    private String type;
    private List<Groups> groups;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<Groups> getGroups() {
        return groups;
    }

    public void setGroups(List<Groups> groups) {
        this.groups = groups;
    }
}
