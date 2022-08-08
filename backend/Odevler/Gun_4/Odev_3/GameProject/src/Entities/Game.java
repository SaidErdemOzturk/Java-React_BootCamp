

package Entities;

import Abstract.Entities;

public class Game implements Entities{
    private String gameName;
    private double gamePrice;
    private double campaignAfterGamePrice;
    private String releaseDate;
    public Game(String gameName, double gamePrice, String releaseDate) {
        this.gameName = gameName;
        this.gamePrice = gamePrice;
        this.releaseDate = releaseDate;
    }
    public String getGameName() {
        return gameName;
    }
    public void setGameName(String gameName) {
        this.gameName = gameName;
    }
    public double getGamePrice() {
        return gamePrice;
    }
    public void setGamePrice(double gamePrice) {
        this.gamePrice = gamePrice;
    }
    public String getReleaseDate() {
        return releaseDate;
    }
    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }
    public double getCampaignAfterGamePrice() {
        return campaignAfterGamePrice;
    }
    public void setCampaignAfterGamePrice(double campaignAfterGamePrice) {
        this.campaignAfterGamePrice = campaignAfterGamePrice;
    }
    
}
