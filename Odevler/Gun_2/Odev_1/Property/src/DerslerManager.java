public class DerslerManager {
    public void addDers(Dersler ders){
        System.out.println("Ders eklendi. : "+ ders.getDersAdi());
    }
    public void deleteDers(Dersler dersler){
        System.out.println("Ders silindi : "+ dersler.getDersAdi());
    }
}
