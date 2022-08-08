package javaReact_BootCamp.hrms.entities.concretes;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="employers")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","adverts"})
@PrimaryKeyJoinColumn(name="employer_id", referencedColumnName = "id")
@EqualsAndHashCode(callSuper=false)
public class Employer {
	
	@Id
	@Column(name="employer_id")
	private int employerId;
	
	@Column(name="company_name")
	private String companyName;
	
	@Column(name="web_site")
	private String webSite;
	
	@Column(name="phone_number")
	private String phoneNumber;
	
	@OneToMany(mappedBy = "employer")
	private List<Advert> adverts;
	
}
