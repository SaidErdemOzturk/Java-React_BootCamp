
public class App {
    public static void main(String[] args) throws Exception {
        Dersler dersler = new Dersler("dersAdi", "egitmenAdi", 8);
        DerslerManager dersManager = new DerslerManager();
        dersManager.addDers(dersler);
    }
}
