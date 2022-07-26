import java.sql.Date;

public class Customer implements Entitys{
    private String tcNo;
    private String firstName;
    private String lastname;
    private String dateTime;
    public Customer(String tcNo, String firstName, String lastname, String dateTime) {
        this.tcNo = tcNo;
        this.firstName = firstName;
        this.lastname = lastname;
        this.dateTime = dateTime;
    }
    public String getTcNo() {
        return tcNo;
    }
    public void setTcNo(String tcNo) {
        this.tcNo = tcNo;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getDateTime() {
        return dateTime;
    }
    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }
    
    
}
