package javaReact_BootCamp.hrms.dataAccess.abstracts;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javaReact_BootCamp.hrms.entities.concretes.Candidate;
import javaReact_BootCamp.hrms.entities.concretes.Employer;
import javaReact_BootCamp.hrms.entities.dtos.EmployerWithUserDto;

public interface EmployerDao extends JpaRepository<Employer,Integer >{	
	Employer getByEmail(String email);
}
