import axios from 'axios'
export default class AdvertService{

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
    findById(id){
        return axios.get(`http://localhost:8080/api/advert/getbyid?id=${id}`)
    }
}
