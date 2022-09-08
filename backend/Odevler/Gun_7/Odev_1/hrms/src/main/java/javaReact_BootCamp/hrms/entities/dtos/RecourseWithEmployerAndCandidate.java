package javaReact_BootCamp.hrms.entities.dtos;

import javaReact_BootCamp.hrms.entities.concretes.Candidate;
import javaReact_BootCamp.hrms.entities.concretes.Employer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RecourseWithEmployerAndCandidate {

	private int id;
	
	private Employer employer;
	
	private Candidate candidate;
}
