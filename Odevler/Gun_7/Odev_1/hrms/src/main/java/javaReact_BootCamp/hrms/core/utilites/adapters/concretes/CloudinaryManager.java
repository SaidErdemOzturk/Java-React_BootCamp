package javaReact_BootCamp.hrms.core.utilites.adapters.concretes;


import java.io.File;
import java.io.IOException;
import java.util.Map;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import javaReact_BootCamp.hrms.core.utilites.adapters.abstracts.ImageService;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;

public class CloudinaryManager {

	public void addImageWithCloudinary(File file) throws IOException {

		Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
		  "cloud_name", "daidoerdem",
		  "api_key", "331488645512567",
		  "api_secret", "XTLir1cJ5k3K_hwbCBQtqOHKosk"));
		Map uploadResult = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
		
		
	}

}
