import React from 'react'
import axios from 'axios'
export default class userService{

    getAll(){
        axios.get("http://localhost:8080/api/advert/getall")
    }

    getByIsActive(){        
        axios.get("http://localhost:8080/api/advert/getbyisactivate")
    }
    add(){

    }
    getByEmployerId(){
        axios.get("http://localhost:8080/api/advert/getallsortedwithdate")
    }
    getAllSortedWithDate(){
        axios.get("http://localhost:8080/api/advert/getallsortedwithdate")
    }
}
