import java.sql.Date;

import Abstract.CampaignManagerInterface;
import Abstract.CheckPersonGun_4;
import Abstract.GameManagerInterface;
import Concretes.CampaignManager;
import Concretes.CustomerCheckManager;
import Concretes.CustomerManager;
import Concretes.GameManager;
import Entities.Campaign;
import Entities.Game;
import Entities.Customer;

public class App {
    public static void main(String[] args) throws Exception {
        Customer customer = new Customer(1, "firstName", "lastName","10.0.1999");
        Game game = new Game("gameName", 1000, "100");
        Campaign campaign = new  Campaign("campaignName", 100);


        CheckPersonGun_4 checkPersonGun_4 = new CustomerCheckManager();
        CustomerManager customerManager = new CustomerManager(checkPersonGun_4);
        customerManager.kayitOl(customer);

        CampaignManagerInterface campaignManager = new CampaignManager();
        campaignManager.addCampaign(campaign);
        
        GameManagerInterface gameManager = new GameManager();
        gameManager.addCampaign(campaign, game);
        gameManager.sellGame(customer, game);

     


    }
}
