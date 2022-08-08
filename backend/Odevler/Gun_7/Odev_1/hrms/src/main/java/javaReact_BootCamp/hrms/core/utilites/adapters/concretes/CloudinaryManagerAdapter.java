package javaReact_BootCamp.hrms.core.utilites.adapters.concretes;

import java.io.File;
import java.io.IOException;

import javaReact_BootCamp.hrms.core.utilites.adapters.abstracts.ImageService;
import javaReact_BootCamp.hrms.core.utilites.result.ErrorResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;

public class CloudinaryManagerAdapter implements ImageService{

	@Override
	public Result addImage(File file) {
		// TODO Auto-generated method stub
		CloudinaryManager cloudinaryManager = new CloudinaryManager();
		try {
			cloudinaryManager.addImageWithCloudinary(file);
			return new SuccessResult("resim eklendi");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			return new ErrorResult("hata oldu");
		}
		
	}

}
