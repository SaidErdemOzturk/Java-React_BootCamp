public class Student extends User{
    public Student(int id, String name, String secondName, String phoneNumber,int lessonCount,int studentNumber) {
        super(id, name, secondName, phoneNumber);
        //TODO Auto-generated constructor stub
        this.lessonCount = lessonCount;
        this.studentNumber = studentNumber;
    }
    int lessonCount;
    int studentNumber;
    public int getLessonCount() {
        return lessonCount;
    }
    public void setLessonCount(int lessonCount) {
        this.lessonCount = lessonCount;
    }
    public int getStudentNumber() {
        return studentNumber;
    }
    public void setStudentNumber(int studentNumber) {
        this.studentNumber = studentNumber;
    }    
    
    
}
