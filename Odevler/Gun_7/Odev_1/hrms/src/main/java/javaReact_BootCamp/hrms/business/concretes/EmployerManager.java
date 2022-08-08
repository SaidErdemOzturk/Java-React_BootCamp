package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.EmployerService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.EmployerDao;
import javaReact_BootCamp.hrms.entities.concretes.Advert;
import javaReact_BootCamp.hrms.entities.concretes.Employer;

@Service
public class EmployerManager implements EmployerService {
	private EmployerDao employerDao;
	
	@Autowired
	public EmployerManager(EmployerDao employerDao) {
		// TODO Auto-generated constructor stub
		super();
		this.employerDao = employerDao;
	}
	
	
	@Override
	public DataResult<List<Employer>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Employer>>(employerDao.findAll(), "Veriler çekildi");
	}

	@Override
	public Result add(Employer employer) {
		// TODO Auto-generated method stub
		this.employerDao.save(employer);
		return new SuccessResult("Veri eklendi");
	}




}
