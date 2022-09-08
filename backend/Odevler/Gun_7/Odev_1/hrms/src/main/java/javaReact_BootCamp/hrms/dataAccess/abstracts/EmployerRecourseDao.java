package javaReact_BootCamp.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import javaReact_BootCamp.hrms.entities.concretes.EmployerRecourse;

public interface EmployerRecourseDao extends JpaRepository<EmployerRecourse, Integer> {

	List<EmployerRecourse> getByCandidateRecourseId(int id);
	
	List<EmployerRecourse> getByEmployerRecourseId(Integer id);
	
	List<EmployerRecourse> getByAdvertRecourseId(Integer id);
	
	List<EmployerRecourse> getByStatus(String status);
	
	EmployerRecourse getByEmployerRecourseIdAndAdvertRecourseId(Integer employerId, Integer advertId);
}
