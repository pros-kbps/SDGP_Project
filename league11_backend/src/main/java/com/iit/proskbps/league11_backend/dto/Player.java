package com.iit.proskbps.league11_backend.dto;

import java.lang.reflect.Array;
import java.util.List;

public class Player {
    private int id;
    private String objectId;
    private String name;
    private String longName;
    private DateOfBirth dateOfBirth;
    private PlayerImage image;
    private List<String> battingStyles;
    private List<String> bowlingStyles;
    private String playingRole;

    public String getObjectId() {
        return objectId;
    }

    public void setObjectId(String objectId) {
        this.objectId = objectId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLongName() {
        return longName;
    }

    public void setLongName(String longName) {
        this.longName = longName;
    }

    public DateOfBirth getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(DateOfBirth dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public PlayerImage getImage() {
        return image;
    }

    public void setImage(PlayerImage image) {
        this.image = image;
    }

    public String getPlayingRole() {
        return playingRole;
    }

    public void setPlayingRole(String playingRole) {
        this.playingRole = playingRole;
    }

    public List<String> getBattingStyles() {
        return battingStyles;
    }

    public void setBattingStyles(List<String> battingStyles) {
        this.battingStyles = battingStyles;
    }

    public List<String> getBowlingStyles() {
        return bowlingStyles;
    }

    public void setBowlingStyles(List<String> bowlingStyles) {
        this.bowlingStyles = bowlingStyles;
    }
}
