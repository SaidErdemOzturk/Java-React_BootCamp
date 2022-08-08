package Odevler.Gun_4.Odev_1.Interfaces;

public class CustomerManager {
    private CustomerDal customerDal;
    public CustomerManager(CustomerDal customerDal) {
        this.customerDal=customerDal;
    }

    public void getData(){
        customerDal.getData();
    }

}
