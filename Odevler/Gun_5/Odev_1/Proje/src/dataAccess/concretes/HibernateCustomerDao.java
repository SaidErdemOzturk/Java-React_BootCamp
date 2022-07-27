package dataAccess.concretes;

import java.util.ArrayList;
import java.util.List;

import dataAccess.abstracts.CustomerDao;
import entities.concretes.Customer;

public class HibernateCustomerDao implements CustomerDao{

    List<Customer> customerList = new ArrayList<>();
    @Override
    public void add(Customer customer) {
        customerList.add(customer);
    }

    @Override
    public void delete(Customer customer) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void update(Customer customer) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public List<Customer> getAll() {
        // TODO Auto-generated method stub
        return customerList;
    }
    
}
