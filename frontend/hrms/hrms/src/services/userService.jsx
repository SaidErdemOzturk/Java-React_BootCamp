import axios from 'axios'
import React from 'react'

export default class UserService{
    login(props){
        return axios.get(`http://localhost:8080/api/users/login?email=${props.email}&${props.password}`)
    }
}
