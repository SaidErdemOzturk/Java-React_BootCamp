package Dersler.Gun_4;

public class Utils {
    public void runLogger(Logger[] logger,String message){
        for(Logger loggers:logger){
            loggers.Log(message);
        }

    }   
}
