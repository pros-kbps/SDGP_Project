package com.iit.proskbps.league11_backend.model;

import javax.persistence.*;

@Entity
@Table(name = "detail")
public class Data {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String date;
    private String team;
    private String oppoTeam;
    private String tossWinner;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public String getOppoTeam() {
        return oppoTeam;
    }

    public void setOppoTeam(String oppoTeam) {
        this.oppoTeam = oppoTeam;
    }

    public String getTossWinner() {
        return tossWinner;
    }

    public void setTossWinner(String tossWinner) {
        this.tossWinner = tossWinner;
    }

}
