package javaReact_BootCamp.hrms.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import javaReact_BootCamp.hrms.business.abstracts.AdvertService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.Advert;
import javaReact_BootCamp.hrms.entities.concretes.Employer;

@RestController
@RequestMapping("/api/advert")
@CrossOrigin
public class AdvertController {
	
	private AdvertService advertService;
	public AdvertController() {
		// TODO Auto-generated constructor stub
	}
	@Autowired
	public AdvertController(AdvertService advertService) {
		super();
		this.advertService=advertService;
	}
	
	@GetMapping("/getall")
	public DataResult<List<Advert>> getAll(){
		return this.advertService.getAll();
	}
	
	@PostMapping("/add")
	public Result add(@RequestBody Advert advert) {
		return this.advertService.add(advert);
	}
	
	@DeleteMapping("/deletebyid")
	public Result deleteById(@RequestParam Integer id) {
		return this.advertService.deleteById(id);
	}
	
	@GetMapping("/getallsortedwithdate")
	public DataResult<List<Advert>> getAllSortedWithDate(){
		
		return this.advertService.getAllSortedWithDate();
	}
	
	@GetMapping("/findbyemployerid")
	public DataResult<List<Advert>> findByEmployerId(@RequestParam int employerId){
		return this.advertService.findByEmployer(employerId);
	}
	
	@GetMapping("/getbyisactivate")
	public DataResult<List<Advert>> getByIsActivate(){
		return this.advertService.getAllIsActive();
	}
	@PutMapping("/updateadvert")
	public Result update(@RequestBody Advert advert) {
		return this.advertService.update(advert);
	}
	@GetMapping("/getbyid")
	public DataResult<Advert> findById(@RequestParam int id){
		return this.advertService.findById(id);
		
	}
	
	@GetMapping("/getbyemployerid")
	public DataResult<List<Advert>> getByEmployer(@RequestParam int employerId){
		return this.advertService.getByEmployer(employerId);
	}
	
}
