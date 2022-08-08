
public class Dersler {
    private String dersAdi;
    private String egitmenAdi;
    private int dersTamamlanmaOranı;
    public Dersler(String dersAdi, String egitmenAdi, int dersTamamlanmaOranı) {
        this.dersAdi = dersAdi;
        this.egitmenAdi = egitmenAdi;
        this.dersTamamlanmaOranı = dersTamamlanmaOranı;
    }
    public String getDersAdi() {
        return dersAdi;
    }
    public void setDersAdi(String dersAdi) {
        this.dersAdi = dersAdi;
    }
    public String getEgitmenAdi() {
        return egitmenAdi;
    }
    public void setEgitmenAdi(String egitmenAdi) {
        this.egitmenAdi = egitmenAdi;
    }
    public int getDersTamamlanmaOranı() {
        return dersTamamlanmaOranı;
    }
    public void setDersTamamlanmaOranı(int dersTamamlanmaOranı) {
        this.dersTamamlanmaOranı = dersTamamlanmaOranı;
    }
}
