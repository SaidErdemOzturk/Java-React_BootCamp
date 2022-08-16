package javaReact_BootCamp.hrms.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javaReact_BootCamp.hrms.business.abstracts.UserService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
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
	
	@GetMapping("/getall")
	public DataResult<List<User>> getAll(){
		return this.userService.getAll();
	}
	
	@GetMapping("/login")
	public DataResult<User> login(@RequestParam String email,String password){
		return this.userService.login(email, password);
	}
}
