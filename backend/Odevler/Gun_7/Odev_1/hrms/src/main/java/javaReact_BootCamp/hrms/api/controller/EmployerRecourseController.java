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
import javaReact_BootCamp.hrms.business.abstracts.EmployerRecourseService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.CandidateRecourse;
import javaReact_BootCamp.hrms.entities.concretes.EmployerRecourse;

@RestController
@RequestMapping("/api/employerrecourse")
@CrossOrigin
public class EmployerRecourseController {
	
	private EmployerRecourseService employerRecourseService;
	
	public EmployerRecourseController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	public EmployerRecourseController(EmployerRecourseService employerRecourseService) {
		super();
		this.employerRecourseService = employerRecourseService;
	}
	
	
	@PostMapping("/add")
	public Result add(@RequestBody EmployerRecourse recourse) {
		return this.employerRecourseService.add(recourse);
	}
	
	@PutMapping("/update")
	public Result update(@RequestBody EmployerRecourse recourse){
		return this.employerRecourseService.update(recourse);
	}
	
	@GetMapping("/getbyemployerid")
	public DataResult<List<EmployerRecourse>> getByEmployerId(@RequestParam Integer id){
		return this.employerRecourseService.getByEmployerId(id);
	}
	
	@GetMapping("/getAll")
	public DataResult<List<EmployerRecourse>> getAll(){
		return this.employerRecourseService.getAll();
	}
	
	@GetMapping("/getbycandidateid")
	public DataResult<List<EmployerRecourse>> getByCandidateId(@RequestParam int id){
		return this.employerRecourseService.getByCandidateId(id);
	}
	
	@GetMapping("/getbyadvertid")
	public DataResult<List<EmployerRecourse>> getByAdvertId(@RequestParam int id){
		return this.employerRecourseService.getByAdvertId(id);
	}
	
	@GetMapping("/getbystatus")
	public DataResult<List<EmployerRecourse>> getByStatus(@RequestParam String status){
		return this.employerRecourseService.getByStatus(status);
	}
	
	
	@GetMapping("/getbyemployerandadvert")
	public DataResult<EmployerRecourse> getByEmployerIdAndAdvertId(@RequestParam Integer employerId,Integer advertId){
		return this.employerRecourseService.getByEmployerIdAndAdvertId(employerId, advertId);

	}
	
	@DeleteMapping("/deletebyid")
	public Result delete(int id){
		return this.employerRecourseService.delete(id);
	}
	
}
