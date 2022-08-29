import axios from 'axios'
export default class AdvertService{

    getAll(){
        return axios.get("http://localhost:8080/api/advert/getall")
    }

    getByIsActive(){        
        return axios.get("http://localhost:8080/api/advert/getbyisactivate")
    }
    add(values){
        
        values.active=true
        if(values.imageUrl===""){
            values.imageUrl="https://www.turquagroup.com.tr/images/blog/blog_FCF81632-9A97-47DA-997B-2201C790A954.jpg"

        }
        console.log(values)
        return axios.post("http://localhost:8080/api/advert/add",values)
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
