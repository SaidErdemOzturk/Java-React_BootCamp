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

import javaReact_BootCamp.hrms.business.abstracts.EmployerService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.entities.concretes.Employer;
import javaReact_BootCamp.hrms.entities.concretes.User;

@RestController
@RequestMapping("/api/employer")
@CrossOrigin
public class EmployerController {

	private EmployerService employerService;
	
	public EmployerController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	public EmployerController(EmployerService employerService)
	{
		super();
		this.employerService = employerService;
	}
	
	@GetMapping("/getall")
	public DataResult<List<Employer>> getAll(){
		return this.employerService.getAll();
	}
	
	@PostMapping("/add")
	public Result add(@RequestBody Employer employer) {
		return this.employerService.add(employer);
	}
	
	@PutMapping("/updateemployer")
	public Result update(@RequestBody Employer employer) {
		return this.employerService.update(employer);
	}
	
	@GetMapping("/getbyid")
	public DataResult<Employer> getById(@RequestParam Integer id){
		return this.employerService.getById(id);
		
	}
}
