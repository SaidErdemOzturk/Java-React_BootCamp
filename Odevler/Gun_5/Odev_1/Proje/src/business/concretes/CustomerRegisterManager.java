package business.concretes;

import java.util.List;
import java.util.regex.Pattern;

import business.abstracts.CustomerRegisterService;
import dataAccess.abstracts.CustomerDao;
import entities.concretes.Customer;

public class CustomerRegisterManager implements CustomerRegisterService{

    CustomerDao customerDao;
    List<Customer> customerList;

    public CustomerRegisterManager(CustomerDao customerDao) {
        this.customerDao = customerDao;
        this.customerList = customerDao.getAll();

    }
    @Override
    public boolean isUsedEmail(Customer customer) {
        boolean control = true;
        for(Customer checkCustomer : customerList){
            if(checkCustomer.getEmail()==customer.getEmail()){
                control = false;
                System.out.println("Bu email kullanılmaktadır.");
                break;
            }
        }
        return control;
    }

    @Override
    public boolean checkFirstName(Customer customer) {
        if(customer.getName().length()<2){
            System.out.println("isminiz 2 karakterden küçük olamaz.");
            return false;
        }else{
            return true;
        }
    }

    @Override
    public boolean checkLastName(Customer customer) {
        if(customer.getSurName().length()<2){
            System.out.println("soyisminiz 2 karakterden küçük olamaz.");
            return false;
        }else{
            return true;
        }
    }

    @Override
    public boolean checkPassword(Customer customer) {
        if(customer.getPassword().length()<6){
            System.out.println("Şifreniz 6 karakterden küçük olamaz.");
            return false;
        }else{
            return true;
        }
    }

    @Override
    public boolean isValidEmail(Customer customer) {
        String regex = "^(.+)@(.+)$";  
        Pattern pattern = Pattern.compile(regex);
        boolean control = false;
        if(pattern.matcher(customer.getEmail()).find()){
            control = true;
        }
        else{
            System.out.println("email tipi yanlış");
        }
        // TODO Auto-generated method stub
        return control;
    }
    
}
