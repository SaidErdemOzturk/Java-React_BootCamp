package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.EmployerRecourseService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.ErrorDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.EmployerRecourseDao;
import javaReact_BootCamp.hrms.entities.concretes.CandidateRecourse;
import javaReact_BootCamp.hrms.entities.concretes.EmployerRecourse;

@Service
public class EmployerRecourseManager implements EmployerRecourseService{

private EmployerRecourseDao employerRecourseDao;
	
	@Autowired
	public EmployerRecourseManager(EmployerRecourseDao employerRecourseDao) {
		// TODO Auto-generated constructor stub
		super();
		this.employerRecourseDao=employerRecourseDao;
	}
	

	@Override
	public DataResult<List<EmployerRecourse>> getByCandidateId(int id) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<EmployerRecourse>>(employerRecourseDao.getByCandidateRecourseId(id), "Veriler Gösteriliyor");
	}

	@Override
	public DataResult<List<EmployerRecourse>> getByEmployerId(Integer id) {
		// TODO Auto-generated method stub
		List<EmployerRecourse> result = employerRecourseDao.getByEmployerRecourseId(id);
		if(result !=null) {
			return new SuccessDataResult<List<EmployerRecourse>>(result, "Veriler Gösteriliyor");
		}else {
			return new ErrorDataResult<>("Veri bulunamadı");
		}
		
	}


	@Override
	public Result add(EmployerRecourse recourse) {
		// TODO Auto-generated method stub
		this.employerRecourseDao.save(recourse);
		return new SuccessResult("Başvuru yapıldı.");
	}


	@Override
	public DataResult<List<EmployerRecourse>> getByAdvertId(Integer id) {
		// TODO Auto-generated method stub
		List<EmployerRecourse> result = employerRecourseDao.getByAdvertRecourseId(id);
		if(result!=null) {
			return new SuccessDataResult<List<EmployerRecourse>>(result, "verile gösteriliyor");
		}else {
			return new ErrorDataResult<>("Veri bulunamadı");
		}
	}


	@Override
	public DataResult<List<EmployerRecourse>> getByStatus(String status) {
		// TODO Auto-generated method stub
		List<EmployerRecourse> result = employerRecourseDao.getByStatus(status);
		if(result!=null) {
			return new SuccessDataResult<List<EmployerRecourse>>(result, "verile gösteriliyor");
		}else {
			return new ErrorDataResult<>("Veri bulunamadı");
		}
	}


	@Override
	public DataResult<EmployerRecourse> getByEmployerIdAndAdvertId(Integer employerId, Integer advertId) {
		// TODO Auto-generated method stub
		EmployerRecourse result= employerRecourseDao.getByEmployerRecourseIdAndAdvertRecourseId(employerId, advertId);
		if(result!=null) {
			return new SuccessDataResult<EmployerRecourse>(result, "verile gösteriliyor");
		}else {
			return new ErrorDataResult<>("Veri bulunamadı");
		}
	}


	@Override
	public Result delete(int id) {
		// TODO Auto-generated method stub
		this.employerRecourseDao.deleteById(id);
		return new SuccessResult("Başvuru iptal edildi");
	}


	@Override
	public DataResult<List<EmployerRecourse>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<EmployerRecourse>>(employerRecourseDao.findAll(), "veriler gösteriliyor");
	}


	@Override
	public Result update(EmployerRecourse recourse) {
		// TODO Auto-generated method stub
		this.employerRecourseDao.save(recourse);
		return new SuccessResult("Başvuru Güncellendi");
	}


}
