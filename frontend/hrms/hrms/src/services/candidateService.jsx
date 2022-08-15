import axios from 'axios'
export default class CandidateService{
    getAll(){        
        axios.get("http://localhost:8080/api/candidate/getall")
    }
    add(values){
        axios.post("http://localhost:8080/api/candidate/add",{
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            identifierNumber: values.identifierNumber,
            birthDay: values.birthDay,
            dob: values.dob
        })
    }
}
