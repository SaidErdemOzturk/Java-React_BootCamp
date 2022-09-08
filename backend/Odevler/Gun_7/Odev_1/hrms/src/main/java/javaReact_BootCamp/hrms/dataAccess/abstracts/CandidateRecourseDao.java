package javaReact_BootCamp.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import javaReact_BootCamp.hrms.entities.concretes.CandidateRecourse;

public interface CandidateRecourseDao extends JpaRepository<CandidateRecourse, Integer>{
	
	List<CandidateRecourse> getByCandidateRecourseId(int id);
	
	List<CandidateRecourse> getByEmployerRecourseId(Integer id);
	
	List<CandidateRecourse> getByAdvertRecourseId(Integer id);
	
	List<CandidateRecourse> getByStatus(String status);
	
	CandidateRecourse getByCandidateRecourseIdAndAdvertRecourseId(Integer candidateId, Integer advertId);
	
	
}
