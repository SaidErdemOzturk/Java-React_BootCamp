package javaReact_BootCamp.hrms.business.abstracts;

import java.util.List;

import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.CandidateRecourse;
import javaReact_BootCamp.hrms.entities.dtos.RecourseWithEmployerAndCandidate;

public interface CandidateRecourseService {
	
	DataResult<List<CandidateRecourse>> getAll();
	
	DataResult<List<CandidateRecourse>> getByCandidateId(int id);
	
	DataResult<List<CandidateRecourse>> getByEmployerId(Integer id);
	
	DataResult<List<CandidateRecourse>> getByAdvertId(Integer id);
	
	DataResult<List<CandidateRecourse>> getByStatus(String status);
	
	DataResult<CandidateRecourse> getByCandidateIdAndAdvertId(Integer candidateId,Integer advertId );
	
	Result add(CandidateRecourse recourse);
	
	Result delete(int id);
	
	Result update(CandidateRecourse recourse);
	

}
