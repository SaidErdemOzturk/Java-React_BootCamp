package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.EmployerService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.ErrorDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.ErrorResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.EmployerDao;
import javaReact_BootCamp.hrms.dataAccess.abstracts.UserDao;
import javaReact_BootCamp.hrms.entities.concretes.Advert;
import javaReact_BootCamp.hrms.entities.concretes.Candidate;
import javaReact_BootCamp.hrms.entities.concretes.Employer;

@Service
public class EmployerManager implements EmployerService {
	private EmployerDao employerDao;
	private UserDao userDao;
	
	@Autowired
	public EmployerManager(EmployerDao employerDao,UserDao userDao) {
		// TODO Auto-generated constructor stub
		super();
		this.employerDao = employerDao;
		this.userDao = userDao;
	}
	
	
	@Override
	public DataResult<List<Employer>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Employer>>(employerDao.findAll(), "Veriler çekildi");
	}


	@Override
	public Result add(Employer employer) {
		// TODO Auto-generated method stub
		
		if(checkEmail(employer)) {
			employerDao.save(employer);
			return new SuccessResult("Kullanıı oluşturuldu");
		}else {
			return new ErrorResult("Bu email adresi kullanımdadır");
		}

	}


	@Override
	public DataResult<Employer> getById(Integer id) {
		// TODO Auto-generated method stub
		Employer result = employerDao.getById(id);
		if(result != null) {
			return new SuccessDataResult<Employer>(result, "Veriler çekildi");
		}else {
			return new ErrorDataResult<>("Bu id ile biri bulunamadı");
		}		
	}
	

	private boolean checkEmail(Employer employer) {
		// TODO Auto-generated method stub
		if(this.userDao.getByEmail(employer.getEmail())==null) {
			return true;
		}else {
			System.out.println(employer.getEmail());
			return false;
		}
	}




}
