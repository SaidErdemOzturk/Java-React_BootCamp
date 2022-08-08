public class User {
        private int id;
        private String name;
        private String secondName;
        private String phoneNumber;
        
        public User(int id, String name, String secondName, String phoneNumber) {
            this.id = id;
            this.name = name;
            this.secondName = secondName;
            this.phoneNumber = phoneNumber;
        }
        public int getId() {
            return id;
        }
        public void setId(int id) {
            this.id = id;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
        public String getSecondName() {
            return secondName;
        }
        public void setSecondName(String secondName) {
            this.secondName = secondName;
        }
        public String getPhoneNumber() {
            return phoneNumber;
        }
        public void setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
        }
}
