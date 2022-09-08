package javaReact_BootCamp.hrms.entities.concretes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="candidate_recourses")
public class CandidateRecourse {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="status")
	private String status;
	
	@ManyToOne
	@JoinColumn(name="advert_id")
	private Advert advertRecourse;
	
	@ManyToOne
	@JoinColumn(name="employer_id")
	private Employer employerRecourse;
	
	@ManyToOne
	@JoinColumn(name="candidate_id")
	private Candidate candidateRecourse;

}
