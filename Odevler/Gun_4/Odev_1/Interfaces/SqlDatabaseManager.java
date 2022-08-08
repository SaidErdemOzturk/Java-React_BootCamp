package Odevler.Gun_4.Odev_1.Interfaces;

public class SqlDatabaseManager implements CustomerDal{

    @Override
    public void getData() {
        System.out.println("sql ile veriler çekildi");
        
    }

    
}
