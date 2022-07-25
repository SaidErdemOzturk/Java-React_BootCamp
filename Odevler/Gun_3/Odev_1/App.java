
import javax.sql.rowset.serial.SerialDatalink;

public class App {
    public static void main(String[] args) throws Exception {
        User student = new Student(1, "isim1", "secondName", "phoneNumber", 5, 1000);
        User instructor = new Instructor(1, "isim1", "secondName", "phoneNumber", 5, 10);
        UserManager manager1 = new StudentManager();
        manager1.add(student);
        UserManager manager2 = new InstructorManager();
        manager2.add(instructor);
        
    }
}
