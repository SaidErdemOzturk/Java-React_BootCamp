package javaReact_BootCamp.hrms.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
		this.advertService=advertService;
	}
	
	@GetMapping("/getall")
	public DataResult<List<Advert>> getAll(){
		return this.advertService.getAll();
	}
	
	@PostMapping
	public Result add(@RequestBody Advert advert) {
		return this.advertService.add(advert);
	}
	
	@GetMapping("/getallsortedwithdate")
	public DataResult<List<Advert>> getAllSortedWithDate(){
		
		return this.advertService.getAllSortedWithDate();
	}
	
	@GetMapping("/getbyemployerid")
	public DataResult<List<Advert>> getByEmployerId(@RequestParam int employerId){
		return this.advertService.getByEmployerId(employerId);
	}
	
	@GetMapping("/getbyisactivate")
	public DataResult<List<Advert>> getByIsActivate(){
		return this.advertService.getAllIsActive();
	}
	@PutMapping("/updateadvert")
	public Result update(@RequestBody Advert advert) {
		return this.advertService.update(advert);
	}
	
}
