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

import javaReact_BootCamp.hrms.business.abstracts.CandidateRecourseService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.CandidateRecourse;
import javaReact_BootCamp.hrms.entities.dtos.RecourseWithEmployerAndCandidate;

@RestController
@RequestMapping("/api/candidaterecourse")
@CrossOrigin
public class CandidateRecourseController {
	
	private CandidateRecourseService candidateRecourseService;
	public CandidateRecourseController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	public CandidateRecourseController(CandidateRecourseService candidateRecourseService) {
		super();
		this.candidateRecourseService = candidateRecourseService;
	}
	
	
	@PostMapping("/add")
	public Result add(@RequestBody CandidateRecourse recourse) {
		return this.candidateRecourseService.add(recourse);
	}
	
	@PutMapping("/update")
	public Result update(@RequestBody CandidateRecourse recourse){
		return this.candidateRecourseService.update(recourse);
	}
	
	@GetMapping("/getbyemployerid")
	public DataResult<List<CandidateRecourse>> getByEmployerId(@RequestParam Integer id){
		return this.candidateRecourseService.getByEmployerId(id);
	}
	
	@GetMapping("/getAll")
	public DataResult<List<CandidateRecourse>> getAll(){
		return this.candidateRecourseService.getAll();
	}
	
	@GetMapping("/getbycandidateid")
	public DataResult<List<CandidateRecourse>> getByCandidateId(@RequestParam int id){
		return this.candidateRecourseService.getByCandidateId(id);
	}
	
	@GetMapping("/getbyadvertid")
	public DataResult<List<CandidateRecourse>> getByAdvertId(@RequestParam int id){
		return this.candidateRecourseService.getByAdvertId(id);
	}
	
	@GetMapping("/getbystatus")
	public DataResult<List<CandidateRecourse>> getByStatus(@RequestParam String status){
		return this.candidateRecourseService.getByStatus(status);
	}
	
	
	@GetMapping("/getbycandidateandadvert")
	public DataResult<CandidateRecourse> getByCandidateIdAndAdvertId(@RequestParam Integer candidateId,Integer advertId){
		return this.candidateRecourseService.getByCandidateIdAndAdvertId(candidateId, advertId);
	}
	

	
	@DeleteMapping("/deletebyid")
	public Result delete(int id){
		return this.candidateRecourseService.delete(id);
	}
	
}
