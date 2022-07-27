import business.concretes.CustomerManager;
import dataAccess.concretes.HibernateCustomerDao;
import entities.concretes.Customer;

public class App {

    public static void main(String[] args) throws Exception {
        Customer customer = new Customer("name", "surName", "email@email.com", "16547896321");
        Customer customer2 = new Customer("name", "surName", "email", "password");
        Customer customer3 = new Customer("name", "surName", "email", "password");
        Customer customer4 = new Customer("name", "surName", "email", "password");
        CustomerManager customerManager = new CustomerManager(new HibernateCustomerDao());
        customerManager.add(customer);
        customerManager.add(customer2);
        customerManager.signIn(customer);
    }
}
