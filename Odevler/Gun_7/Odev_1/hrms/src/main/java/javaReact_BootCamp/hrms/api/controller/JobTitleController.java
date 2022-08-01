package javaReact_BootCamp.hrms.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import javaReact_BootCamp.hrms.business.abstracts.JobTitleService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.JobTitles;

@RestController
@RequestMapping("/api/jobtitles")
public class JobTitleController {

private JobTitleService jobTitleService;
	
	public JobTitleController() {
		// TODO Auto-generated constructor stub
	}
	
	
	@Autowired
	public JobTitleController(JobTitleService jobTitleService) {
		super();
		this.jobTitleService = jobTitleService;
	}



	@GetMapping("/getall")
	public DataResult<List<JobTitles>> getAll(){
		return this.jobTitleService.getAll();
	}
	
	@PostMapping
	public Result add(@RequestBody JobTitles jobTitles) {
		return this.jobTitleService.add(jobTitles);
	}
	
}
