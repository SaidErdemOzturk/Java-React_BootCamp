package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.JobTitleService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.JobTitlesDao;
import javaReact_BootCamp.hrms.entities.concretes.JobTitles;

@Service
public class JobTitlesManager implements JobTitleService {

	private JobTitlesDao jobTitlesDao;
	
	
	public JobTitlesManager(JobTitlesDao jobTitlesDao) {
		super();
		this.jobTitlesDao=jobTitlesDao;
	}
	
	@Override
	public DataResult<List<JobTitles>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<JobTitles>>(jobTitlesDao.findAll(), "Veriler çekildi");
	}

	@Override
	public Result add(JobTitles jobTitles) {
		// TODO Auto-generated method stub
		this.jobTitlesDao.save(jobTitles);
		return new SuccessResult("yeni iş eklendi");
	}

}
