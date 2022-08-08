package javaReact_BootCamp.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javaReact_BootCamp.hrms.entities.concretes.Candidate;
import javaReact_BootCamp.hrms.entities.dtos.CandidateWithCurriculumVitaeDto;

public interface CandidateDao extends JpaRepository<Candidate, Integer>{

	//@Query("Select new javaReact_BootCamp.hrms.entities.dtos.CandidateWithCurriculumVitaeDto(c1.id, c2.candidate_id, c1.categoryName) From Candidate c1 Inner Join c1.curriculumVitaes c2")
	//List<CandidateWithCurriculumVitaeDto> getCandidateWithCurriculumVitaeDetails();
}
