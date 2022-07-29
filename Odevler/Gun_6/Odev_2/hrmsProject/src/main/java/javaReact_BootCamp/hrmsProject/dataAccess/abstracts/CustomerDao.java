package javaReact_BootCamp.hrmsProject.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import javaReact_BootCamp.hrmsProject.entities.abstracts.Entities;

public interface CustomerDao extends JpaRepository<Entities, Integer> {

}
