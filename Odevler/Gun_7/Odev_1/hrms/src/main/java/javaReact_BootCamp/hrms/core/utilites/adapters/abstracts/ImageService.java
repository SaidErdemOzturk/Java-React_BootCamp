package javaReact_BootCamp.hrms.core.utilites.adapters.abstracts;

import java.io.File;

import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;

public interface ImageService {
	Result addImage(File file);
}
