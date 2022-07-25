public class StudentManager  extends UserManager{
    @Override
    public void add(User user){
        System.out.println("öğrenci eklendi : "+user.getName());
    }
    @Override
    public void update(User user){
        System.out.println("öğrenci güncellendi : "+user.getName());
    }
    @Override
    public void delete(User user){
        System.out.println("öğrenci silindi : "+user.getName());
    }
}
