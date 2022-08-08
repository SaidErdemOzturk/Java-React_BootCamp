package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.ProgrammingLanguageService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.ProgrammingLanguageDao;
import javaReact_BootCamp.hrms.entities.concretes.ProgrammingLanguage;

@Service
public class ProgrammingLanguageManager implements ProgrammingLanguageService {
	
	private ProgrammingLanguageDao programmingLanguageDao;
	
	@Autowired
	public ProgrammingLanguageManager(ProgrammingLanguageDao programmingLanguageDao) {
		super();
		this.programmingLanguageDao = programmingLanguageDao;
	}
	
	@Override
	public Result add(ProgrammingLanguage programmingLanguage) {
		// TODO Auto-generated method stub
		programmingLanguageDao.save(programmingLanguage);
		return new SuccessResult("veri eklendi");
	}

	@Override
	public DataResult<List<ProgrammingLanguage>> getAll() {
		
		return new SuccessDataResult<List<ProgrammingLanguage>>(this.programmingLanguageDao.findAll(), "veriler gösteriliyor");
	}

}
