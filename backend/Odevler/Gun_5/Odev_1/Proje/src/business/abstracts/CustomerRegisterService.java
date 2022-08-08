package business.abstracts;

import entities.concretes.Customer;

public interface CustomerRegisterService {
    boolean isUsedEmail(Customer customer);
    boolean checkFirstName(Customer customer);
    boolean checkLastName(Customer customer);
    boolean checkPassword(Customer customer);
    boolean isValidEmail(Customer customer);
}
