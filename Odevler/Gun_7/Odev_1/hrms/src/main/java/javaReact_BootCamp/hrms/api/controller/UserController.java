package javaReact_BootCamp.hrms.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javaReact_BootCamp.hrms.business.abstracts.UserService;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.User;

@RestController
@RequestMapping("/api/users")
public class UserController {
	private UserService userService;
	public UserController() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService=userService;
	}
	
	@PostMapping("/add")
	public Result add(User user) {
		return this.userService.add(user);
	}
}
