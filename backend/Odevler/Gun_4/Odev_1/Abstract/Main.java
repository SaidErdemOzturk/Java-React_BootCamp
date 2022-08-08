package Odevler.Gun_4.Odev_1.Abstract;

public class Main {
    public static void main(String[] args) {
        CustomerManager customerManager = new CustomerManager(new OracleDatabaseManager());
        customerManager.getCustomer();
    }
    
}
