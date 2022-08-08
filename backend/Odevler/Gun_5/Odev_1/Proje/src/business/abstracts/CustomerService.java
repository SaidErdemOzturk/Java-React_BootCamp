package business.abstracts;

import entities.concretes.Customer;

public interface CustomerService {
    void add(Customer customer);
    void signIn(Customer customer);
}
