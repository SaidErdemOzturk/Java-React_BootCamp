package javaBootCamp.northwind.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaBootCamp.northwind.business.abstracts.UserService;
import javaBootCamp.northwind.core.dataAccess.UserDao;
import javaBootCamp.northwind.core.entities.User;
import javaBootCamp.northwind.core.utilities.results.DataResult;
import javaBootCamp.northwind.core.utilities.results.Result;
import javaBootCamp.northwind.core.utilities.results.SuccessDataResult;
import javaBootCamp.northwind.core.utilities.results.SuccessResult;

@Service
public class UserManager implements UserService {

	private UserDao userDao;
	
	@Autowired
	public UserManager(UserDao userDao) {
		super();
		this.userDao = userDao;
	}
	
	@Override
	public Result add(User user) {
		// TODO Auto-generated method stub
		this.userDao.save(user);
		return new SuccessResult("veri eklendi");
	}

	@Override
	public DataResult<User> findByEmail(String email) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<User>(this.userDao.findByEmail(email), "veriler çekildi");
	}


}
