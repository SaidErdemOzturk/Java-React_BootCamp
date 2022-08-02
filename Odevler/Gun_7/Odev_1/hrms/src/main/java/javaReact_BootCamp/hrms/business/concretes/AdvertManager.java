package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.AdvertService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.AdvertDao;
import javaReact_BootCamp.hrms.entities.concretes.Advert;

@Service
public class AdvertManager implements AdvertService {

	private AdvertDao advertDao;
	
	@Autowired
	public AdvertManager(AdvertDao advertDao) {
		// TODO Auto-generated constructor stub
		this.advertDao = advertDao;
	}
	
	@Override
	public DataResult<List<Advert>> getAll() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Advert>>(advertDao.findAll(),"veriler gösteriliyor");
	}

	@Override
	public Result add(Advert advert) {
		// TODO Auto-generated method stub
		this.advertDao.save(advert);
		return new SuccessResult("veri eklendi");
	}

	@Override
	public DataResult<List<Advert>> getAllSortedWithDate() {
		// TODO Auto-generated method stub
		Sort sort = Sort.by(Sort.Direction.ASC,"startingDate");
		return new SuccessDataResult<List<Advert>>(advertDao.findAll(sort), "veriler çekiliyor");
	}

}
