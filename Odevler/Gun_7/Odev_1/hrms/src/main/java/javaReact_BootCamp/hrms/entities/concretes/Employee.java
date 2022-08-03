package javaReact_BootCamp.hrms.entities.concretes;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="employee")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","products"})
@PrimaryKeyJoinColumn(name = "user_id")
public class Employee extends User {
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="identifier_number")
	private String identifierNumber;
	
	@Column(name="birth_day")
	private LocalDate birthDay;

}
