package Concretes;

import Abstract.GameManagerInterface;
import Entities.Campaign;
import Entities.Customer;
import Entities.Game;

public class GameManager implements GameManagerInterface {

    @Override
    public void sellGame(Customer customer, Game game) {
        System.out.println("Oyun satın alındı. Oyunu alan : "+ customer.getFirstName() + " " + " Fiyatı : "+game.getCampaignAfterGamePrice());
        
    }

    @Override
    public void addCampaign(Campaign campaign,Game game) {
        
        game.setCampaignAfterGamePrice(game.getGamePrice()-campaign.getCampaignValue());
        
    }
    
}
