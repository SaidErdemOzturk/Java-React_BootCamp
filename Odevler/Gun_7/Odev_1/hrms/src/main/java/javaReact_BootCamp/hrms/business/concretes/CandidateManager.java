package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.CandidateService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.CandidateDao;
import javaReact_BootCamp.hrms.entities.concretes.Candidate;

@Service
public class CandidateManager implements CandidateService {

	private CandidateDao candidateDao;
	@Autowired
	public CandidateManager(CandidateDao candidateDao) {
		// TODO Auto-generated constructor stub
		super();
		this.candidateDao = candidateDao;
	}
	
	@Override
	public DataResult<List<Candidate>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Candidate>>(this.candidateDao.findAll(), "veriler gösteriliyor");
	}

	@Override
	public Result add(Candidate candidate) {
		// TODO Auto-generated method stub
		this.candidateDao.save(candidate);
		return new SuccessResult("ürün eklendi");
	}

}
