package javaReact_BootCamp.hrms.business.abstracts;

import java.util.List;

import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.entities.concretes.ProgrammingLanguage;

public interface ProgrammingLanguageService {
	Result add(ProgrammingLanguage programmingLanguage);
	
	DataResult<List<ProgrammingLanguage>> getAll();

}
