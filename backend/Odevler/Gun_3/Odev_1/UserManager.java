public class UserManager {
    public void add(User user){
        System.out.println("kullanıcı eklendi : "+user.getName());
    }
    public void update(User user){
        System.out.println("kullanıcı güncellendi : "+user.getName());
    }
    public void delete(User user){
        System.out.println("kullanıcı silindi : "+user.getName());
    }

}
