import axios from "axios"
export default class EmployerService{
    getAll(){
        return axios.get("http://localhost:8080/api/employer/getall")
    }
    add(values){
        return axios.post("http://localhost:8080/api/employer/add",values)
    }

}