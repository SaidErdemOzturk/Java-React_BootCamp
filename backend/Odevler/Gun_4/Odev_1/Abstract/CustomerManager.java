package Odevler.Gun_4.Odev_1.Abstract;


public class CustomerManager {
    
    private DatabaseManager databaseManager;

    public CustomerManager(DatabaseManager databaseManager) {
        this.databaseManager = databaseManager;
    }
    public void getCustomer(){
        databaseManager.getData();
    }
    
}
