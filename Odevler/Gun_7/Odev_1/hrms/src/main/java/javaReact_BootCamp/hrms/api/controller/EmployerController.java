package javaReact_BootCamp.hrms.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javaReact_BootCamp.hrms.business.abstracts.EmployerService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.entities.concretes.Employer;

@RestController
@RequestMapping("/api/employer")
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
	
	@PostMapping
	public Result add(Employer employer) {
		
		return this.employerService.add(employer);
	}
}
