package Abstract;

import Entities.Campaign;
import Entities.Customer;
import Entities.Game;

public interface GameManagerInterface {
    void sellGame(Customer customer,Game game);
    void addCampaign(Campaign campaign, Game game);

}
