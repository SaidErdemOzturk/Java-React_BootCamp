package javaReact_BootCamp.hrms.entities.concretes;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="candidates")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","curriculumVitaes"})
@PrimaryKeyJoinColumn(name="candidates_id", referencedColumnName = "id")
@EqualsAndHashCode(callSuper=false)
public class Candidate extends User {
	
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="identifier_number")
	private String identifierNumber;
	
	@Column(name="birth_day")
	private LocalDate birthDay;
	
	@OneToMany(mappedBy = "candidate")
	private List<CurriculumVitae> curriculumVitaes;
	
	@JsonIgnore
	@OneToMany(mappedBy="candidateRecourse")
	private List<CandidateRecourse> recourses;
	

}
