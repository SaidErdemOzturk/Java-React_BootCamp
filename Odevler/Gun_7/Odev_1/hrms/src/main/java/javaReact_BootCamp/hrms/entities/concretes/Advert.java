package javaReact_BootCamp.hrms.entities.concretes;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="advert")

public class Advert {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="position")
	private String position;
	
	@Column(name="job_description")
	private String jobDescription;
	
	@Column(name="city")
	private String city;
	
	@Column(name="max_wage")
	private int maxWage;
	
	@Column(name="open_position_count")
	private int minWage;
	
	@Column(name="deadline")
	private LocalDate deadline;
	
	@Column(name="starting_date")
	private LocalDate startingDate;
	
	@Column(name="employer_id")
	private int employerId;
	
}