package javaReact_BootCamp.hrms.business.abstracts;

import java.util.List;

import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.Advert;
import javaReact_BootCamp.hrms.entities.concretes.Employer;

public interface AdvertService {

	DataResult<List<Advert>> getAll();
	
	Result add(Advert advert);
	
	Result update(Advert advert);

	DataResult<List<Advert>> getAllSortedWithDate();
	
	DataResult<List<Advert>> getByEmployerId(Employer employer);
	
	DataResult<List<Advert>> getAllIsActive();
	
}
