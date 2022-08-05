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

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="schools")
public class School {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="school_name")
	private String schoolName;
	
	@Column(name="starting_date")
	private LocalDate startingDate;
	
	@Column(name="ending_date")
	private LocalDate endingDate;

	@Column(name="departman_name")
	private String departmanName;
	
	@Column(name="graduate_date")
	private LocalDate graduateTime;
	
	@ManyToOne
	@JoinColumn(name="curriculum_id")
	private CurriculumVitae curriculumVitae;
	
}
