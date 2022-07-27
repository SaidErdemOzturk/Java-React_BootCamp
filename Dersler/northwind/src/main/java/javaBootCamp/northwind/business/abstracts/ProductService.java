package javaBootCamp.northwind.business.abstracts;

import java.util.List;

import javaBootCamp.northwind.entities.concretes.Product;

public interface ProductService {
	List<Product> getAll();
}
