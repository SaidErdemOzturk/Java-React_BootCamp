package javaReact_BootCamp.hrmsProject.business.concretes;

import javaReact_BootCamp.hrmsProject.business.abstracts.UserService;
import javaReact_BootCamp.hrmsProject.business.abstracts.VerificationService;
import javaReact_BootCamp.hrmsProject.business.abstracts.candidatesService;
import javaReact_BootCamp.hrmsProject.entities.abstracts.Entities;
import javaReact_BootCamp.hrmsProject.entities.concretes.Candidate;

public class candidateManager implements candidatesService{

	private VerificationService verificationService;
	
	public candidateManager(VerificationService verificationService) {
		// TODO Auto-generated constructor stub
		this.verificationService = verificationService;
	}
	@Override
	public void signUp(Entities entities) {
		// TODO Auto-generated method stub
		//verificationService.confirm(entities);
		
	}

}
