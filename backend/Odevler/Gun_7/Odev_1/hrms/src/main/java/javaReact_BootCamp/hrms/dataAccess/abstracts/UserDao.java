package javaReact_BootCamp.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import javaReact_BootCamp.hrms.entities.concretes.User;

public interface UserDao extends JpaRepository<User, Integer>{
	User getByEmailAndPassword(String email, String password);
}
