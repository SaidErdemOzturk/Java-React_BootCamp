package javaReact_BootCamp.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import javaReact_BootCamp.hrms.entities.concretes.Advert;
import javaReact_BootCamp.hrms.entities.concretes.Employer;

public interface AdvertDao extends JpaRepository<Advert, Integer> {
	
	List<Advert> findByEmployerId(int employerId);
	
	List<Advert> getByEmployer_Id(int employerId);
	
	List<Advert> getByActiveTrue();
		
	Advert findById(int id);
}

