package business.concretes;

import java.util.List;

import business.abstracts.CustomerService;
import dataAccess.abstracts.CustomerDao;
import entities.concretes.Customer;



public class CustomerManager implements CustomerService{
    CustomerDao customerDao;

    public CustomerManager(CustomerDao customerDao) {
        this.customerDao = customerDao;
    }

    @Override
    public void add(Customer customer) {
        CustomerRegisterManager customerRegisterManager = new CustomerRegisterManager(customerDao);
        if(customerRegisterManager.isValidEmail(customer)&&customerRegisterManager.checkFirstName(customer)&&customerRegisterManager.checkLastName(customer)&&customerRegisterManager.checkPassword(customer)&&customerRegisterManager.isUsedEmail(customer)){
            System.out.println("Kayıt başarılı" + customer.getName());
            customerDao.add(customer);
        }else{
            System.out.println("Kayıt başarısız");
        }
        // TODO Auto-generated method stub
        
    }

    @Override
    public void signIn(Customer customer) {
        for(Customer checkCustomer : customerDao.getAll()){
            if(checkCustomer.getEmail() == customer.getEmail()&&checkCustomer.getPassword()==customer.getPassword()){
                System.out.println("Giriş başarılı");
            }else{
                System.out.println("Giriş başarısız");
            }
        }
        // TODO Auto-generated method stub
        
    }
    
}
