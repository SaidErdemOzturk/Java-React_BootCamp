package javaReact_BootCamp.hrms.entities.concretes;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="job_experiences")
public class JobExperience {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="company_name")
	private String compaynName;
	
	@Column(name="position")
	private String position;
	
	@Column(name="starting_date")
	private LocalDate startingDate;
	
	@Nullable
	@Column(name="ending_date")
	private LocalDate endingDate;
	
	@ManyToOne
	@JoinColumn(name="curriculum_id")
	private CurriculumVitae curriculumVitae;
	
	
}
