import axios from 'axios'

export default class CandidateService{
    getAll(){        
        return axios.get("http://localhost:8080/api/candidate/getall")
    }
    add(values){
        values.candidateImage="https://res.cloudinary.com/daidoerdem/image/upload/v1661324531/koxaztrczfryjvw4rivj.webp"
        values.userType="candidate"
        return axios.post("http://localhost:8080/api/candidate/add",values)
    }
    update(values){
        return axios.put("http://localhost:8080/api/candidate/updatecandidate",values)
    }
}
