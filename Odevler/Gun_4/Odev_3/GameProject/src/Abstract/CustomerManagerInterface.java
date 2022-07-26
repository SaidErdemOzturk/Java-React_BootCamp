package Abstract;
import Entities.Customer;

public interface CustomerManagerInterface {
    void kayitOl(Customer customer);
    void bilgiGuncelle(Customer customer);
    void kayitSil(Customer customer);

}
