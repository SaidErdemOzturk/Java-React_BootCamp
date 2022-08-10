import axios from 'axios'
export default class userService{
    getAll(){        
        axios.get("http://localhost:8080/api/candidate/getall")
    }
    add(){
        
    }
}
