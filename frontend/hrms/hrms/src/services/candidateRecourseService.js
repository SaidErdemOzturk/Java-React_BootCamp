import axios from "axios"

export default class CandidateRecourseService{
    add(values){
        return axios.post("http://localhost:8080/api/candidaterecourse/add",values)
    }

    delete(id){
        return axios.delete(`http://localhost:8080/api/candidaterecourse/deletebyid?id=${id}`)
    }


    update(recourse){
        return axios.put(`http://localhost:8080/api/candidaterecourse/update`,recourse)
    }
    getByEmployerId(id){
        return axios.get(`http://localhost:8080/api/candidaterecourse/getbyemployerid?id=${id}`)
    }
    
    getByCandidateId(id){
        return axios.get(`http://localhost:8080/api/candidaterecourse/getbycandidateid?id=${id}`)
    }

    getByCandidateIdAndAdvertId(candidateId,advertId){
        return axios.get(`http://localhost:8080/api/candidaterecourse/getbycandidateandadvert?candidateId=${candidateId}&advertId=${advertId}`)
    }


}