package Concretes;
import Abstract.BaseCustomerManager;
import Abstract.CheckPersonGun_4;
import Entities.Customer;
import Abstract.BaseCustomerManager;
public class CustomerManager extends BaseCustomerManager{

    CheckPersonGun_4 checkPersonGun_4;

    
    public CustomerManager(CheckPersonGun_4 checkPersonGun_4) {
        this.checkPersonGun_4 = checkPersonGun_4;
    }

    @Override
    public void kayitOl(Customer customer) {
        if(checkPersonGun_4.CheckPerson(customer)){
            System.out.println("Kayıt başarılı : " + customer.getFirstName());
        }else{
            System.out.println("Kayıt başarısız");
        }
        
    }

    @Override
    public void bilgiGuncelle(Customer customer) {
        System.out.println("bilgiler güncellendi" + customer.getFirstName());
        
    }

    @Override
    public void kayitSil(Customer customer) {
        System.out.println("kayıtlar silindi" + customer.getFirstName());

        
    }

}
