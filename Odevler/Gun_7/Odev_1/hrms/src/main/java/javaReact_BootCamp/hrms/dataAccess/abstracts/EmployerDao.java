package javaReact_BootCamp.hrms.dataAccess.abstracts;


import org.springframework.data.jpa.repository.JpaRepository;

import javaReact_BootCamp.hrms.entities.concretes.Employer;

public interface EmployerDao extends JpaRepository<Employer,Integer >{

}
