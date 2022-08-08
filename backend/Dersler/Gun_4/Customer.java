package Dersler.Gun_4;

public class Customer {
    private int id;
    private String FirstName;
    private String SecondName;
    public Customer() {
    }
    public Customer(int id, String firstName, String secondName) {
        this.id = id;
        FirstName = firstName;
        SecondName = secondName;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getFirstName() {
        return FirstName;
    }
    public void setFirstName(String firstName) {
        FirstName = firstName;
    }
    public String getSecondName() {
        return SecondName;
    }
    public void setSecondName(String secondName) {
        SecondName = secondName;
    }

    
    
}
