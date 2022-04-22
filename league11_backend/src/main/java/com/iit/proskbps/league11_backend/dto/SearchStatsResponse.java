package com.iit.proskbps.league11_backend.dto;

public class SearchStatsResponse {

    private StatsContent content;


    public StatsContent getContent() {
        return content;
    }

    public void setContent(StatsContent content) {
        this.content = content;
    }

    private PlayerStats player;

    public PlayerStats getPlayer() {
        return player;
    }

    public void setPlayer(PlayerStats player) {
        this.player = player;
    }

    private SinglePlayerStats summary;

    public SinglePlayerStats getSummary() {
        return summary;
    }

    public void setSummary(SinglePlayerStats summary) {
        this.summary = summary;
    }
}
