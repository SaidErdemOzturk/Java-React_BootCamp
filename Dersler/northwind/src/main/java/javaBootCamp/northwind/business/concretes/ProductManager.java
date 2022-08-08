package javaBootCamp.northwind.business.concretes;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import javaBootCamp.northwind.business.abstracts.ProductService;
import javaBootCamp.northwind.core.utilities.results.DataResult;
import javaBootCamp.northwind.core.utilities.results.Result;
import javaBootCamp.northwind.core.utilities.results.SuccessDataResult;
import javaBootCamp.northwind.core.utilities.results.SuccessResult;
import javaBootCamp.northwind.dataAccess.abstracts.ProductDao;
import javaBootCamp.northwind.entities.concretes.Product;
import javaBootCamp.northwind.entities.dtos.ProductWithCategoryDto;

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
		return new SuccessDataResult<List<Product>>(this.productDao.findAll(),"veriler çekildi");
	}

	@Override
	public Result add(Product product) {
		// TODO Auto-generated method stub
		this.productDao.save(product);
		return new SuccessResult("ürün eklendi");
	}


	@Override
	public DataResult<Product> getByProductName(String productName) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<Product>(this.productDao.getByProductName(productName), "mesaj");
	}

	@Override
	public DataResult<Product> getByProductNameAndCategoryId(String productName, int categoryId) {
		return new SuccessDataResult<Product>(this.productDao.getByProductNameAndCategory_CategoryId(productName, categoryId),"veri eklendi");
	}

	@Override
	public DataResult<List<Product>> getByProductNameOrCategoryId(String productName, int categoryId) {
		return new SuccessDataResult<List<Product>>(this.productDao.getByProductNameOrCategory_CategoryId(productName, categoryId),"veri eklendi");
	}

	@Override
	public DataResult<List<Product>> getByCategoryIdIn(List<Integer> categories) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Product>>(this.productDao.getByCategory_CategoryIdIn(categories) ,"veri eklendi");
	}

	@Override
	public DataResult<List<Product>> getByProductNameContains(String productName) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Product>>(this.productDao.getByProductNameContains(productName),"veri eklendi");
	}

	@Override
	public DataResult<List<Product>> getByProductNameStartsWith(String productName) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Product>>(this.productDao.getByProductNameStartsWith(productName),"veri eklendi");
	}

	@Override
	public DataResult<List<Product>> getByNameAndCategory(String name, int category) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Product>>(this.productDao.getByNameAndCategory(name, category),"veri eklendi");
	}

	@Override
	public DataResult<List<Product>> getAll(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		
		Pageable pageable = PageRequest.of(pageNo,pageSize);
		return new SuccessDataResult<List<Product>>(this.productDao.findAll(pageable).getContent(), "veriler çekildi");
	}

	@Override
	public DataResult<List<Product>> getAllSorted() {
		// TODO Auto-generated method stub
		Sort sort = Sort.by(Sort.Direction.ASC, "productName");
		return new SuccessDataResult<List<Product>>(this.productDao.findAll(sort),"veriler çekildi");
	}

	@Override
	public DataResult<List<ProductWithCategoryDto>> getProductWithCategoryDetails() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<ProductWithCategoryDto>>(this.productDao.getProductWithCategoryDetails(), "veriler çekildi");
				
	}



}
