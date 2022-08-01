package javaReact_BootCamp.hrms.business.abstracts;

import java.util.List;

import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.JobTitles;

public interface JobTitleService {
	DataResult<List<JobTitles>> getAll();
	Result add(JobTitles jobTitles);
}
