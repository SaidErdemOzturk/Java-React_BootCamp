import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }

    getByProductId(id){
        return axios.get(`http://localhost:8080/api/products/findbyid?id=${id}`)
    }
}