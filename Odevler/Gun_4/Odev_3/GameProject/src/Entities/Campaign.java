package Entities;
import Abstract.Entities;

public class Campaign implements Entities{
    private String campaignName;
    private int campaignValue;
    public Campaign(String campaignName, int campaignValue) {
        this.campaignName = campaignName;
        this.campaignValue = campaignValue;
    }
    public String getCampaignName() {
        return campaignName;
    }
    public void setCampaignName(String campaignName) {
        this.campaignName = campaignName;
    }
    public int getCampaignValue() {
        return campaignValue;
    }
    public void setCampaignValue(int campaignValue) {
        this.campaignValue = campaignValue;
    }
    
    
}
