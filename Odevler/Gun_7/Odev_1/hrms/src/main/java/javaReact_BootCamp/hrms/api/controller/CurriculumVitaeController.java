package javaReact_BootCamp.hrms.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javaReact_BootCamp.hrms.business.abstracts.CurriculumVitaeService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.CurriculumVitae;

@RestController
@RequestMapping("/api/curriculum")
public class CurriculumVitaeController {

	private CurriculumVitaeService curriculumVitaeService;
	
	public CurriculumVitaeController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	public CurriculumVitaeController(CurriculumVitaeService curriculumVitaeService) {
		super();
		this.curriculumVitaeService = curriculumVitaeService;
	}
	
	@GetMapping("/getall")
	public DataResult<List<CurriculumVitae>> getAll(){
		return this.curriculumVitaeService.getAll();
	}
	
	@PostMapping("/add")
	public Result add(CurriculumVitae curriculumVitae) {
		return this.curriculumVitaeService.add(curriculumVitae);
	}
	
	
}
