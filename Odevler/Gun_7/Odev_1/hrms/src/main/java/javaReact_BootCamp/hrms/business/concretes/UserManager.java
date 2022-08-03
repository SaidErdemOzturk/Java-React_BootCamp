package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.UserService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.UserDao;
import javaReact_BootCamp.hrms.entities.concretes.User;

@Service
public class UserManager implements UserService {

	private UserDao userDao;
	
	@Autowired
	public UserManager(UserDao userDao) {
		// TODO Auto-generated constructor stub
		super();
		this.userDao=userDao;
	}
	
	@Override
	public DataResult<List<User>> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Result add(User user) {
		// TODO Auto-generated method stub
		this.userDao.save(user);
		return new SuccessResult("veri eklendi");
	}

}
