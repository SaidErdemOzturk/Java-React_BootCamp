import axios from 'axios'

export default class UserService{
    login(props){
        return axios.get(`http://localhost:8080/api/users/login?email=${props.email}&password=${props.password}`)
    }

    checkEmail(email){
        return axios.get(`http://localhost:8080/api/users/checkemail?email=${email}`)
    }
}
