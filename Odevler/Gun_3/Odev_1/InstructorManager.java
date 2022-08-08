public class InstructorManager extends UserManager {
    @Override
    public void add(User user){
        System.out.println("eğitmen eklendi : "+user.getName());
    }
    @Override
    public void update(User user){
        System.out.println("eğitmen eklendi : "+user.getName());
    }
    @Override
    public void delete(User user){
        System.out.println("eğitmen eklendi : "+user.getName());
    }
}
