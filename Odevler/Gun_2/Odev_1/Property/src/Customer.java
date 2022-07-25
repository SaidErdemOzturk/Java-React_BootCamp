public class Customer {
    private String customerName;
    private int id;
    private String customerSurname;
    public Customer(String customerName, int id, String customerSurname) {
        this.customerName = customerName;
        this.id = id;
        this.customerSurname = customerSurname;
    }

    public String getCustomerName() {
        return customerName;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getCustomerSurName(){
        return customerSurname;
    }
    public void setCustomerSurName(String customerSurname){
        this.customerSurname = customerSurname;
    }
}
