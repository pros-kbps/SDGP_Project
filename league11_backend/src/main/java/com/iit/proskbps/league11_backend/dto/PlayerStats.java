package com.iit.proskbps.league11_backend.dto;

import java.util.List;

public class PlayerStats {

    private int id;
    private String fullName;
    private DateOfBirth dateOfBirth;
    private PlayerImage image;
    private List<String> battingStyles;
    private List<String> bowlingStyles;
    private String playingRole;
    private int height;
    private String heightUnit;
    private String education;

    private List<Stats> careerAvg;
    private List<Stats> vsTeamStats;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
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

    public List<Stats> getCareerAvg() {
        return careerAvg;
    }

    public void setCareerAvg(List<Stats> careerAvg) {
        this.careerAvg = careerAvg;
    }

    public List<Stats> getVsTeamStats() {
        return vsTeamStats;
    }

    public void setVsTeamStats(List<Stats> vsTeamStats) {
        this.vsTeamStats = vsTeamStats;
    }
}
