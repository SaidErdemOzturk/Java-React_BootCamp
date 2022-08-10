import axios from 'axios'
import React from 'react'

export default class userService{
    getAll(){
        axios.get("http://localhost:8080/api/products/getall")
    }
}
