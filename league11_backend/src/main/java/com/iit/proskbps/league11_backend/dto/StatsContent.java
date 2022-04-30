package com.iit.proskbps.league11_backend.dto;

import java.util.List;
public class StatsContent {

    private PlayerContainer players;

    public PlayerContainer getPlayers() {
        return players;
    }

    public void setPlayers(PlayerContainer players) {
        this.players = players;
    }

    private Groups summary;

    public Groups getSummary() {
        return summary;
    }

    public void setSummary(Groups summary) {
        this.summary = summary;
    }
}
