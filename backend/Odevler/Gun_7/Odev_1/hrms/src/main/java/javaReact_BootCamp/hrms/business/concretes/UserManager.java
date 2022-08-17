package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.UserService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.ErrorDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.ErrorResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
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
		List<User> result = userDao.findAll();
		if(result != null) {
			return new SuccessDataResult<List<User>>(result, "veri");
		}else {
			return new ErrorDataResult<>("Veri bulunamadı");
		}
	}

	@Override
	public DataResult<User> login(String email, String password) {
		// TODO Auto-generated method stub
		User result = userDao.getByEmailAndPassword(email, password);
		if(result != null) {
			return new SuccessDataResult<User>(result, "Giriş yapıldı");
		}else {
			return new ErrorDataResult<>("Email veya şifre hatalı");
		}
		
	}



}
