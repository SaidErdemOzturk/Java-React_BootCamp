public class App {
    public static void main(String[] args) throws Exception {

    
        int[] sayilar = {2,4,5,6,7,8,9,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29};

        for(int i=0;i<sayilar.length;i++){
            boolean control = false;
            for(int j =2;j<sayilar[i];j++){
                if(sayilar[i]%j==0){
                    control = true;
                }
            }
            if(control == false){
                System.out.println(sayilar[i] + "sayısı asaldır.");
            }
        }
     

        int sayi = 7;
        int toplam= 0;
        for(int i = 1; i < sayi;i++){
            if(sayi % i == 0){
                toplam = i + toplam;
            }
        }
        if(toplam == sayi){
            System.out.println("sayi mükemmeldir.");
        }
    }
}
