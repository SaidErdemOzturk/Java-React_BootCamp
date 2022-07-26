import java.sql.Date;


public class App {
    public static void main(String[] args) throws Exception {
        CustomerCheckManager customerCheckManager = new CustomerCheck();
        BaseCustomerManager customerManager = new NeroCustomerManager(customerCheckManager);
        customerManager.Save(new Customer("tcNo", "firstName", "lastname","10.10.1999"));
    }
}
