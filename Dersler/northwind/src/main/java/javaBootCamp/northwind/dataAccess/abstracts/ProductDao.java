package javaBootCamp.northwind.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javaBootCamp.northwind.entities.concretes.Product;

public interface ProductDao extends JpaRepository<Product, Integer> {
	
	
	Product getByProductName(String productName);
	
	Product getByProductNameAndCategory_CategoryId(String productName,int categoryId);
	
	
	List<Product> getByProductNameOrCategory_CategoryId(String productName,int categoryId);
	
	List<Product> getByCategory_CategoryIdIn(List<Integer> categories);
	
	List<Product> getByProductNameContains(String productName);//içeriyorsa
	
	List<Product> getByProductNameStartsWith(String productName);//bununla başlayan
	
	
	@Query("From Product where productName=:name and category.categoryId=:category")
	List<Product> getByNameAndCategory(String name,int category);
	
}
