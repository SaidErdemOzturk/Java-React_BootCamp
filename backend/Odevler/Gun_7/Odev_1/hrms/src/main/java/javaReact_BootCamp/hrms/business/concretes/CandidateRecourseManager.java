package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.CandidateRecourseService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.ErrorDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.CandidateRecourseDao;
import javaReact_BootCamp.hrms.entities.concretes.CandidateRecourse;
import javaReact_BootCamp.hrms.entities.dtos.RecourseWithEmployerAndCandidate;

@Service
public class CandidateRecourseManager implements CandidateRecourseService{
	
	private CandidateRecourseDao candidateRecourseDao;
	
	@Autowired
	public CandidateRecourseManager(CandidateRecourseDao candidateRecourseDao) {
		// TODO Auto-generated constructor stub
		super();
		this.candidateRecourseDao=candidateRecourseDao;
	}
	

	@Override
	public DataResult<List<CandidateRecourse>> getByCandidateId(int id) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<CandidateRecourse>>(candidateRecourseDao.getByCandidateRecourseId(id), "Veriler Gösteriliyor");
	}

	@Override
	public DataResult<List<CandidateRecourse>> getByEmployerId(Integer id) {
		// TODO Auto-generated method stub
		List<CandidateRecourse> result = candidateRecourseDao.getByEmployerRecourseId(id);
		if(result !=null) {
			return new SuccessDataResult<List<CandidateRecourse>>(result, "Veriler Gösteriliyor");
		}else {
			return new ErrorDataResult<>("Veri bulunamadı");
		}
		
	}


	@Override
	public Result add(CandidateRecourse recourse) {
		// TODO Auto-generated method stub
		this.candidateRecourseDao.save(recourse);
		return new SuccessResult("Başvuru yapıldı.");
	}


	@Override
	public DataResult<List<CandidateRecourse>> getByAdvertId(Integer id) {
		// TODO Auto-generated method stub
		List<CandidateRecourse> result = candidateRecourseDao.getByAdvertRecourseId(id);
		if(result!=null) {
			return new SuccessDataResult<List<CandidateRecourse>>(result, "verile gösteriliyor");
		}else {
			return new ErrorDataResult<>("Veri bulunamadı");
		}
	}


	@Override
	public DataResult<List<CandidateRecourse>> getByStatus(String status) {
		// TODO Auto-generated method stub
		List<CandidateRecourse> result = candidateRecourseDao.getByStatus(status);
		if(result!=null) {
			return new SuccessDataResult<List<CandidateRecourse>>(result, "verile gösteriliyor");
		}else {
			return new ErrorDataResult<>("Veri bulunamadı");
		}
	}


	@Override
	public DataResult<CandidateRecourse> getByCandidateIdAndAdvertId(Integer candidateId, Integer advertId) {
		// TODO Auto-generated method stub
		CandidateRecourse result= candidateRecourseDao.getByCandidateRecourseIdAndAdvertRecourseId(candidateId, advertId);
		if(result!=null) {
			return new SuccessDataResult<CandidateRecourse>(result, "verile gösteriliyor");
		}else {
			return new ErrorDataResult<>("Veri bulunamadı");
		}
	}


	@Override
	public Result delete(int id) {
		// TODO Auto-generated method stub
		this.candidateRecourseDao.deleteById(id);
		return new SuccessResult("Başvuru iptal edildi");
	}


	@Override
	public DataResult<List<CandidateRecourse>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<CandidateRecourse>>(candidateRecourseDao.findAll(), "veriler gösteriliyor");
	}


	@Override
	public Result update(CandidateRecourse recourse) {
		// TODO Auto-generated method stub
		this.candidateRecourseDao.save(recourse);
		return new SuccessResult("Başvuru Güncellendi");
	}

}
