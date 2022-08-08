package javaReact_BootCamp.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import javaReact_BootCamp.hrms.entities.concretes.JobTitles;

public interface JobTitlesDao extends JpaRepository<JobTitles, Integer>{

}
