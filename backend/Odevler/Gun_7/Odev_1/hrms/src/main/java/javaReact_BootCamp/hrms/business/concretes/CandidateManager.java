package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.CandidateService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.ErrorDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.ErrorResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.CandidateDao;
import javaReact_BootCamp.hrms.dataAccess.abstracts.UserDao;
import javaReact_BootCamp.hrms.entities.concretes.Candidate;
import javaReact_BootCamp.hrms.entities.concretes.Employer;

@Service
public class CandidateManager implements CandidateService {

	private CandidateDao candidateDao;
	private UserDao userDao;
	
	@Autowired
	public CandidateManager(CandidateDao candidateDao,UserDao userDao) {
		// TODO Auto-generated constructor stub
		super();
		this.candidateDao = candidateDao;
		this.userDao = userDao;
	}
	
	@Override
	public DataResult<List<Candidate>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Candidate>>(this.candidateDao.findAll(), "veriler gösteriliyor");
	}

	@Override
	public Result add(Candidate candidate) {
		// TODO Auto-generated method stub
		if(checkEmail(candidate)) {
			this.candidateDao.save(candidate);
			return new SuccessResult("Başarı ile kayıt oldunuz.");
		}else {
			return new ErrorResult("Bu email adresi kullanılmaktadır.");
		}

	}

	@Override
	public DataResult<Candidate> getById(Integer id) {
		// TODO Auto-generated method stub
		Candidate result = candidateDao.getById(id);
		
		if(result != null) {
			return new SuccessDataResult<Candidate>(result, "Veriler çekildi");
		}else {
			return new ErrorDataResult<>("Bu id ile biri bulunamadı");
		}		
	}

	@Override
	public Result update(Candidate candidate) {
		// TODO Auto-generated method stub		
		this.candidateDao.save(candidate);
		return new SuccessResult("Başarı ile güncelleme oldunuz.");

	}
	private boolean checkEmail(Candidate candidate) {
		if(this.userDao.getByEmail(candidate.getEmail())==null) {
			return true;
		}else {
			return false;
		}
	}



}
