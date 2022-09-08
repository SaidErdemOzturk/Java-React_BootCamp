package javaReact_BootCamp.hrms.entities.concretes;

import java.time.LocalDate;
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

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="adverts")

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
	
	@Column(name="title")
	private String title;
	
	@Column(name="max_wage")
	private int maxWage;
	
	@Column(name="min_wage")
	private int minWage;
	
	@Column(name="open_position_count")
	private int open_position_count;
	
	@Column(name="deadline")
	private LocalDate deadline;
	
	@Column(name="starting_date")
	private LocalDate startingDate;
	
	
	@Column(name="image_url")
	private String imageUrl;
	
	@Column(name="is_active")
	private boolean active;
	
	@ManyToOne
	@JoinColumn(name="employer_id")
	private Employer employer;
	
	@JsonIgnore
	@OneToMany(mappedBy = "advertRecourse")
	private List<AdvertRecourse> recourses;

}
