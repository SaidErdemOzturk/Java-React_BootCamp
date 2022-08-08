package business.abstracts;

import java.util.List;

import entities.concretes.Product;

public interface ProductService {
    void add(Product product);
    List<Product> getAll();
    
}
