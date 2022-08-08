

public class NeroCustomerManager extends BaseCustomerManager {

    CustomerCheckManager customerCheckManager;
    public NeroCustomerManager(CustomerCheckManager customerCheckManager) {
        this.customerCheckManager = customerCheckManager;
    }
    @Override
    public void Save(Customer customer) {
      
        if(customerCheckManager.CheckRealPerson(customer)){
            System.out.println("kayır başarılı : "+ customer.getFirstName());
        }else{
            System.out.println("Kayıt başarısız");
        }
        
    }

}
 