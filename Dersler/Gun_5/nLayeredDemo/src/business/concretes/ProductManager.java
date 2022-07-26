package business.concretes;

import java.util.List;

import business.abstracts.ProductService;
import core.jLoggerService;
import dataAccess.abstracts.ProductDao;
import entities.concretes.Product;

public class ProductManager implements ProductService{

    ProductDao productDao;
    jLoggerService jLoggerService;
    public ProductManager(ProductDao productDao, jLoggerService jLoggerService) {
        super();
        this.productDao=productDao;
        this.jLoggerService = jLoggerService;
    }
    @Override
    public void add(Product product) {
        if(product.getId()==1){
            System.out.println("Veri oluşturldu");
            productDao.add(product);
            jLoggerService.LogToSystem(product);
        }else{
            System.out.println("Oluşturulamadı");
        }
        
    }

    @Override
    public List<Product> getAll() {
        // TODO Auto-generated method stub
        return null;
    }
    
}
