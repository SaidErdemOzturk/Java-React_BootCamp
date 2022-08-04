package javaReact_BootCamp.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import javaReact_BootCamp.hrms.entities.concretes.Advert;
import javaReact_BootCamp.hrms.entities.concretes.Employer;

public interface AdvertDao extends JpaRepository<Advert, Integer> {
	
	List<Advert> getByEmployer(Employer employerId);
	
	List<Advert> getByIsActiveTrue();
	
	
}
