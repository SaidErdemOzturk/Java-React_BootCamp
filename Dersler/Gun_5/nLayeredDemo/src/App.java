import business.abstracts.ProductService;
import business.concretes.ProductManager;
import core.jLoggerManagerAdapter;
import core.jLoggerService;
import dataAccess.concretes.AbcProductDao;
import dataAccess.concretes.HibernateProductDao;
import entities.abstracts.Entity;
import entities.concretes.Product;
import jLogger.jLoggerManager;

public class App {
    public static void main(String[] args) throws Exception {
        
        ProductService productService = new ProductManager(new AbcProductDao(),new jLoggerManagerAdapter());
        Product product = new Product(1,1,"name",100,2);
        productService.add(product);
        
    }
}
