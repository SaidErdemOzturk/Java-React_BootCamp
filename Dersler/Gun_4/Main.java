package Dersler.Gun_4;

public class Main {
    public static void main(String[] args) {
        Customer customer = new Customer(1, "firstName", "secondName");
        Logger[] logger = { new SmsLogger(),new DatabaseLogger()};
        CustomerManager customerManager = new CustomerManager(logger);
        customerManager.add(customer);
    }
}
