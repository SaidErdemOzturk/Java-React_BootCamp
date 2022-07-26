package dataAccess.concretes;

import java.util.List;

import dataAccess.abstracts.ProductDao;
import entities.concretes.Product;

public class AbcProductDao implements ProductDao {

    @Override
    public void add(Product product) {
        System.out.println("abcproductdao ile veri eklendi"+product.getName());
        
    }

    @Override
    public void delete(Product product) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void update(Product product) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public Product getOneProduct(Product product) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Product> getAll() {
        // TODO Auto-generated method stub
        return null;
    }
    
}
