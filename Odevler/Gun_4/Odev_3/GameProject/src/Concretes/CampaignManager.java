package Concretes;

import Abstract.CampaignManagerInterface;

import Entities.Campaign;

public class CampaignManager implements CampaignManagerInterface{

    @Override
    public void addCampaign(Campaign campaign) {
        System.out.println("kapmayna eklendi : "+campaign.getCampaignName());
        
    }

    @Override
    public void deleteCampaign(Campaign campaign) {
        System.out.println("kapmayna silindi : "+campaign.getCampaignName());
       

        
    }

    @Override
    public void updateCampaign(Campaign campaign) {
        System.out.println("kapmayna güncellendi : "+campaign.getCampaignName());
       

        
    }


    
}
