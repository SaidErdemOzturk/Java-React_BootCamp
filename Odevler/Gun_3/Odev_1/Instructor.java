public class Instructor extends User{
    public Instructor(int id, String name, String secondName, String phoneNumber,int price,int studentCount) {
        super(id, name, secondName, phoneNumber);
        //TODO Auto-generated constructor stub
        this.price = price;
        this.studentCount = studentCount;
    }
    int price;
    int studentCount;
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }
    public int getStudentCount() {
        return studentCount;
    }
    public void setStudentCount(int studentCount) {
        this.studentCount = studentCount;
    }
}
