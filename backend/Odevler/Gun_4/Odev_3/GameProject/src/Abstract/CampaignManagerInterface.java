package Abstract;

import Entities.Campaign;

public interface CampaignManagerInterface {
    void addCampaign(Campaign campaign);
    void deleteCampaign(Campaign campaign);
    void updateCampaign(Campaign campaign);
}
