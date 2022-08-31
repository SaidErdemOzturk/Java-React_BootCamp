package javaReact_BootCamp.hrms.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import javaReact_BootCamp.hrms.business.abstracts.AdvertService;
import javaReact_BootCamp.hrms.core.utilites.result.DataResult;
import javaReact_BootCamp.hrms.core.utilites.result.Result;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessDataResult;
import javaReact_BootCamp.hrms.core.utilites.result.SuccessResult;
import javaReact_BootCamp.hrms.dataAccess.abstracts.AdvertDao;
import javaReact_BootCamp.hrms.entities.concretes.Advert;
import javaReact_BootCamp.hrms.entities.concretes.Employer;

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
		Sort sort = Sort.by(Sort.Direction.ASC,"deadline");
		return new SuccessDataResult<List<Advert>>(advertDao.findAll(sort), "veriler çekiliyor");
	}

	
	@Override
	public DataResult<List<Advert>> findByEmployer(int employerId) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Advert>>(advertDao.findByEmployerId(employerId), "veriler çekildi");
	}

	@Override
	public DataResult<List<Advert>> getAllIsActive() {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Advert>>(advertDao.getByActiveTrue(), "veriler gösteriliyor");
	}

	@Override
	public Result update(Advert advert) {
		// TODO Auto-generated method stub
		this.advertDao.save(advert);
		return new SuccessResult("veri güncellendi");
	}

	@Override
	public DataResult<Advert> findById(int id) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<Advert>(advertDao.findById(id), "Veri gösteriliyor");
	}

	@Override
	public DataResult<List<Advert>> getByEmployer(int employerId) {
		// TODO Auto-generated method stub
		return new SuccessDataResult<List<Advert>>(advertDao.getByEmployer_Id(employerId), "veriler çekildi");
	}


}
