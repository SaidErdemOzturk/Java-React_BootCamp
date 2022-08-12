package javaBootCamp.northwind.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import javaBootCamp.northwind.entities.concretes.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {

}
