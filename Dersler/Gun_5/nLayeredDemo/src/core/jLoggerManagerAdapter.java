package core;

import entities.concretes.Product;
import jLogger.jLoggerManager;

public class jLoggerManagerAdapter implements jLoggerService{

    @Override
    public void LogToSystem(Product product) {
        jLoggerManager jLoggerManager = new jLoggerManager();
        jLoggerManager.Log();
    }
    
}
