package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.EmployeeService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.EmployeeDao;
import javaReact_BootCamp.hrms.entities.concretes.Employee;

@Service
public class EmployeeManager implements EmployeeService{

	private EmployeeDao employeeDao;
	@Autowired
	public EmployeeManager(EmployeeDao employeeDao) {
		// TODO Auto-generated constructor stub
		super();
		this.employeeDao = employeeDao;
	}
	
	@Override
	public DataResult<List<Employee>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Employee>>(employeeDao.findAll(), "veriler çekildi");
	}

	@Override
	public Result add(Employee employee) {
		// TODO Auto-generated method 
		this.employeeDao.save(employee);
		return new SuccessResult("Veri eklendi");
	}

}
