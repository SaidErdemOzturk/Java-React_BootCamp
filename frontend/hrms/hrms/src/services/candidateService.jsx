import axios from 'axios'
export default class CandidateService{
    getAll(){        
        return axios.get("http://localhost:8080/api/candidate/getall")
    }
    add(values){
        return axios.post("http://localhost:8080/api/candidate/add",values)
    }
}
