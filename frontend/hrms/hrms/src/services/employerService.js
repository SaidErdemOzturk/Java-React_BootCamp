import axios from "axios"
export default class EmployerService{
    getAll(){
        return axios.get("http://localhost:8080/api/employer/getall")
    }
    add(values){
        values.employerImage="https://res.cloudinary.com/daidoerdem/image/upload/v1661325302/qb2xha3jbkoywyrzin5l.png";
        return axios.post("http://localhost:8080/api/employer/add",values)
    }

}