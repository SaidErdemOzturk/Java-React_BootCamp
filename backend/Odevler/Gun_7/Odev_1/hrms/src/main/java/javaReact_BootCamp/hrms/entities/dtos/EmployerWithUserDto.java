package javaReact_BootCamp.hrms.entities.dtos;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployerWithUserDto {

	private int id;
	
	private String companyName;
	
	private String webSite;
	
	private String phoneNumber;
}
