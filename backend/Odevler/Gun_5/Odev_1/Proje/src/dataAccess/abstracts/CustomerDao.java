package dataAccess.abstracts;

import java.util.List;

import entities.concretes.Customer;

public interface CustomerDao {
    void add(Customer customer);
    void delete(Customer customer);
    void update(Customer customer);
    List<Customer> getAll();
}
