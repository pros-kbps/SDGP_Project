package com.iit.proskbps.league11_backend.dto;

import java.lang.reflect.Array;

public class Player {
    private int id;
    private String name;
    private int fullName;
    private DateOfBirth dateOfBirth;
    private PlayerImage playerImage;
    private Array[] battingStyles;
    private Array[] bowlingStyles;
    private String playingRole;
    private int height;
    private String heightUnit;
    private String education;


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

    public int getFullName() {
        return fullName;
    }

    public void setFullName(int fullName) {
        this.fullName = fullName;
    }

    public DateOfBirth getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(DateOfBirth dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public PlayerImage getPlayerImage() {
        return playerImage;
    }

    public void setPlayerImage(PlayerImage playerImage) {
        this.playerImage = playerImage;
    }

    public Array[] getBattingStyles() {
        return battingStyles;
    }

    public void setBattingStyles(Array[] battingStyles) {
        this.battingStyles = battingStyles;
    }

    public Array[] getBowlingStyles() {
        return bowlingStyles;
    }

    public void setBowlingStyles(Array[] bowlingStyles) {
        this.bowlingStyles = bowlingStyles;
    }

    public String getPlayingRole() {
        return playingRole;
    }

    public void setPlayingRole(String playingRole) {
        this.playingRole = playingRole;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public String getHeightUnit() {
        return heightUnit;
    }

    public void setHeightUnit(String heightUnit) {
        this.heightUnit = heightUnit;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }
}


