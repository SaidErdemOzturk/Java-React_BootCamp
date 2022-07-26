package dataAccess.abstracts;

import java.util.List;

import entities.concretes.Product;

public interface ProductDao {
    void add(Product product);
    void delete(Product product);
    void update(Product product);
    Product getOneProduct(Product product);
    List<Product> getAll();
}
