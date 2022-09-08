package javaReact_BootCamp.hrms.business.abstracts;

import java.util.List;

import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.EmployerRecourse;

public interface EmployerRecourseService {
	DataResult<List<EmployerRecourse>> getAll();
	
	DataResult<List<EmployerRecourse>> getByCandidateId(int id);
	
	DataResult<List<EmployerRecourse>> getByEmployerId(Integer id);
	
	DataResult<List<EmployerRecourse>> getByAdvertId(Integer id);
	
	DataResult<List<EmployerRecourse>> getByStatus(String status);
	
	DataResult<EmployerRecourse> getByEmployerIdAndAdvertId(Integer employerId,Integer advertId );
	
	Result add(EmployerRecourse recourse);
	
	Result delete(int id);
	
	Result update(EmployerRecourse recourse);
}
