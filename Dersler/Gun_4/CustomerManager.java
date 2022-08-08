package Dersler.Gun_4;

public class CustomerManager {

    private Logger[] logger;

    public CustomerManager(Logger[] logger) {
        this.logger = logger;
    }
    public void add(Customer customer){
        Utils utils = new Utils();
        utils.runLogger(logger, customer.getFirstName());


    }
    public void delete(Customer customer){
        
        Utils utils = new Utils();
        utils.runLogger(logger, customer.getFirstName());

    }
}
