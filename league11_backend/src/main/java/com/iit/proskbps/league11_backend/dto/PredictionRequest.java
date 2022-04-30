package com.iit.proskbps.league11_backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotBlank;
import java.util.Date;

public class PredictionRequest {

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    private Date date;
    private String venue;
    @NotBlank(message = "Team 1 is Mandatory")
    private String team1;
    private String team2;
    private String tossWinner;
    private String  tossDecision;

    public PredictionRequest( String venue, String team1, String team2, String tossWinner, String tossDecision) {
        this.venue = venue;
        this.team1 = team1;
        this.team2 = team2;
        this.tossWinner = tossWinner;
        this.tossDecision = tossDecision;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getTeam1() {
        return team1;
    }

    public void setTeam1(String team1) {
        this.team1 = team1;
    }

    public String getTeam2() {
        return team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public String getTossWinner() {
        return tossWinner;
    }

    public void setTossWinner(String tossWinner) {
        this.tossWinner = tossWinner;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTossDecision() {
        return tossDecision;
    }

    public void setTossDecision(String tossDecision) {
        this.tossDecision = tossDecision;
    }

}
