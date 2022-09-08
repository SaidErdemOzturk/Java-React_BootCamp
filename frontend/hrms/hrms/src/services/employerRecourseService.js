import axios from "axios"

export default class EmployerRecourseService{
    add(values){
        return axios.post("http://localhost:8080/api/employerrecourse/add",values)
    }

    delete(id){
        return axios.delete(`http://localhost:8080/api/employerrecourse/deletebyid?id=${id}`)
    }

    update(recourse){
        return axios.put(`http://localhost:8080/api/employerrecourse/update`,recourse)
    }

    getByEmployerId(id){
        return axios.get(`http://localhost:8080/api/employerrecourse/getbyemployerid?id=${id}`)
    }
    
    getByCandidateId(id){
        return axios.get(`http://localhost:8080/api/employerrecourse/getbycandidateid?id=${id}`)
    }

    getByAdvertId(id){
        return axios.get(`http://localhost:8080/api/employerrecourse/getbyadvertid?id=${id}`)
    }
}