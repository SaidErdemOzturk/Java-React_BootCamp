package javaReact_BootCamp.hrms.entities.concretes;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="curriculum_vitae")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})

public class CurriculumVitae {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@ManyToOne
	@JoinColumn(name="candidate_id")
	private Candidate candidate;
	
	@Column(name="git")
	private String git;
	
	@Column(name="linkedin")
	private String linkedin;
	
	@Column(name="about")
	private String about;
	
	@JsonIgnore
	@OneToMany(mappedBy="curriculumVitae")
	@JsonIgnoreProperties({"curriculumVitae"})
	private List<JobExperience> experiences;
	
	@JsonIgnore
	@OneToMany(mappedBy="curriculumVitae")
	@JsonIgnoreProperties({"curriculumVitae"})
	private List<Language> languages;
	
	@JsonIgnore
	@OneToMany(mappedBy="curriculumVitae")
	@JsonIgnoreProperties({"curriculumVitae"})
	private List<School> schools;
}
