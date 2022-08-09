package javaBootCamp.northwind.business.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import javaBootCamp.northwind.core.utilities.results.DataResult;
import javaBootCamp.northwind.core.utilities.results.Result;
import javaBootCamp.northwind.entities.concretes.Product;
import javaBootCamp.northwind.entities.dtos.ProductWithCategoryDto;

public interface ProductService {
	DataResult<List<Product>> getAll();
	
	Result add(Product product);
	
	DataResult<List<Product>> getAllSorted();
	
	DataResult<List<Product>> getAll(int pageNo,int pageSize);
	
	DataResult<Product> findById(int id);
	
	DataResult<Product> getByProductName(String productName);
	
	DataResult<Product> getByProductNameAndCategoryId(String productName,int categoryId);
	
	DataResult<List<Product>> getByProductNameOrCategoryId(String productName,int categoryId);
	
	DataResult<List<Product>> getByCategoryIdIn(List<Integer> categories);
	
	DataResult<List<Product>> getByProductNameContains(String productName);//içeriyorsa
	
	DataResult<List<Product>> getByProductNameStartsWith(String productName);//bununla başlayan
	
	DataResult<List<Product>> getByNameAndCategory(String name,int category);
	
	DataResult<List<ProductWithCategoryDto>> getProductWithCategoryDetails(); 
	

}
