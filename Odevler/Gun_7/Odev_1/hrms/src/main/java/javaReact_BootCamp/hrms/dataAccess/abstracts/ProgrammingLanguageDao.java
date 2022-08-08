package javaReact_BootCamp.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import javaReact_BootCamp.hrms.entities.concretes.ProgrammingLanguage;

public interface ProgrammingLanguageDao  extends JpaRepository<ProgrammingLanguage, Integer>{

}
