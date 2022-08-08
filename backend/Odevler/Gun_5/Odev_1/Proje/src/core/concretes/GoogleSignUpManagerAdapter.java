package core.concretes;

import core.abstracts.SingUpService;
import entities.concretes.Customer;

public class GoogleSignUpManagerAdapter implements SingUpService {

    @Override
    public void signUp(Customer customer) {
        // TODO Auto-generated method stub
        GoogleSignUpManager googleSignUpManager = new GoogleSignUpManager();
        googleSignUpManager.signUp();
        
    }
    
}
