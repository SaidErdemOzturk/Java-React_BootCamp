package javaBootCamp.northwind.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javaBootCamp.northwind.business.abstracts.CategoryService;
import javaBootCamp.northwind.core.utilities.results.DataResult;
import javaBootCamp.northwind.entities.concretes.Category;

@RestController
@RequestMapping("/api/category")
@CrossOrigin
public class CategoryController {
	private CategoryService categoryService;
	public CategoryController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	public CategoryController(CategoryService categoryService) {
		super();
		this.categoryService=categoryService;
	}
	
	@GetMapping("/getall")
	public DataResult<List<Category>> getAll(){
		return this.categoryService.getAll();
	}

}
