package Abstract;
import Entities.Customer;
public abstract class BaseCustomerManager implements CustomerManagerInterface{

    @Override
    public abstract void kayitOl(Customer customer);

    @Override
    public abstract void bilgiGuncelle(Customer customer);

    @Override
    public abstract void kayitSil(Customer customer);

    
}
