package javaBootCamp.northwind.business.abstracts;

import java.util.List;

import javaBootCamp.northwind.core.entities.User;
import javaBootCamp.northwind.core.utilities.results.DataResult;
import javaBootCamp.northwind.core.utilities.results.Result;

public interface UserService {

	Result add(User user);
	
	DataResult<User> findByEmail(String email);
	
}
