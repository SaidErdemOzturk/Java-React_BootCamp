package javaBootCamp.northwind.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaBootCamp.northwind.business.abstracts.ProductService;
import javaBootCamp.northwind.dataAccess.abstracts.ProductDao;
import javaBootCamp.northwind.entities.concretes.Product;


@Service
public class ProductManager implements ProductService{

	private ProductDao productDao;
	
	@Autowired
	public ProductManager(ProductDao productDao) {
		super();
		this.productDao = productDao;
	}


	@Override
	public List<Product> getAll() {
		// TODO Auto-generated method stub
		return productDao.findAll();
	} 

}
