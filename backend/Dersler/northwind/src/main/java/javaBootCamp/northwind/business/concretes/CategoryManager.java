package javaBootCamp.northwind.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaBootCamp.northwind.business.abstracts.CategoryService;
import javaBootCamp.northwind.core.utilities.results.DataResult;
import javaBootCamp.northwind.core.utilities.results.SuccessDataResult;
import javaBootCamp.northwind.dataAccess.abstracts.CategoryDao;
import javaBootCamp.northwind.entities.concretes.Category;

@Service
public class CategoryManager implements CategoryService {

	private CategoryDao categoryDao;
	
	@Autowired
	public CategoryManager(CategoryDao categoryDao) {
		super();
		this.categoryDao=categoryDao;
		
	}
	
	@Override
	public DataResult<List<Category>> getAll() {
		return  new SuccessDataResult<List<Category>>(this.categoryDao.findAll(), "veriler gösteriliyor");
	}

}
