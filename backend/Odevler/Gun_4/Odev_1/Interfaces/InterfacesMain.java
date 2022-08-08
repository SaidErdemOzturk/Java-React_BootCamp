package Odevler.Gun_4.Odev_1.Interfaces;

public class InterfacesMain {
    public static void main(String[] args) {
        CustomerManager customerManager = new CustomerManager(new SqlDatabaseManager())   ;
        customerManager.getData();    
    }
}
