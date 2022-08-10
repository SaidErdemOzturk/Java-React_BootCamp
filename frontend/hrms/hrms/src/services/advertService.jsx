import axios from 'axios'
export default class userService{

    getAll(){
        return axios.get("http://localhost:8080/api/advert/getall")
    }

    getByIsActive(){        
        return axios.get("http://localhost:8080/api/advert/getbyisactivate")
    }
    add(){

    }
    getByEmployerId(id){
        return axios.get(`http://localhost:8080/api/advert/getbyemployerid?employerId=${id}`)
    }
    getAllSortedWithDate(){
        return axios.get("http://localhost:8080/api/advert/getallsortedwithdate")
    }
}
