package javaBootCamp.northwind.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaBootCamp.northwind.business.abstracts.ProductService;
import javaBootCamp.northwind.core.utilities.results.DataResult;
import javaBootCamp.northwind.core.utilities.results.Result;
import javaBootCamp.northwind.core.utilities.results.SuccessDataResult;
import javaBootCamp.northwind.core.utilities.results.SuccessResult;
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
	public DataResult<List<Product>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Product>>(this.productDao.findAll(),"veri eklendi");
	}

	@Override
	public Result add(Product product) {
		// TODO Auto-generated method stub
		this.productDao.save(product);
		return new SuccessResult("ürün eklendi");
	}


}
