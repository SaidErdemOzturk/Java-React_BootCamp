package javaReact_BootCamp.hrms.entities.dtos;

import javax.persistence.Entity;

import javaReact_BootCamp.hrms.entities.concretes.CurriculumVitae;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CandidateWithCurriculumVitaeDto {
	
	private int id;
	
	private String candidateName;
	
	private CurriculumVitae cv;
}
