package javaBootCamp.northwind.business.abstracts;

import java.util.List;

import javaBootCamp.northwind.core.utilities.results.DataResult;
import javaBootCamp.northwind.entities.concretes.Category;

public interface CategoryService {
	
	DataResult<List<Category>> getAll();

}
