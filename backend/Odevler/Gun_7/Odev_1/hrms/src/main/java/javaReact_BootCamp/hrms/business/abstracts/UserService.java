package javaReact_BootCamp.hrms.business.abstracts;

import java.util.List;

import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.User;

public interface UserService {
	DataResult<List<User>> getAll();
	Result add(User user);
	
	DataResult<User> login(String email,String password);
}
