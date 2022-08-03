package javaReact_BootCamp.hrms.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javaReact_BootCamp.hrms.business.abstracts.EmployeeService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.Employee;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	private EmployeeService employeeService;
	
	public EmployeeController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	public EmployeeController(EmployeeService employeeService) {
		// TODO Auto-generated constructor stub
		super();
		this.employeeService = employeeService;
	}
	
	@GetMapping("/getall")
	public DataResult<List<Employee>> getAll(){
		return this.employeeService.getAll();
	}
	@PostMapping
	public Result add(@RequestBody Employee employee) {
		return this.employeeService.add(employee);
	}
	
	
	
}
