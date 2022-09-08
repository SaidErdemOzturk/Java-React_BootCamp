import React, { useState,useEffect } from 'react'
import { Button, Container, NavLink } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ProductService from '../services/productService';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { addToCart } from '../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';

export default function ProductList() {


  const dispatch = useDispatch()//aksiyon observer'i
    const [products, setproducts] = useState([])

    useEffect(()=>{
        let productService = new ProductService;
        productService.getProducts().then(result=>setproducts(result.data.data))
    },[])
    

const handleAddToCart=(product)=>{
  dispatch(addToCart(product));
  toast.success(`${product.productName} sepete eklendi`)
}


  return (
    <div> 
    <Container>
      <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Ürün Adı</th>
        <th>Birim Fiyatı</th>
        <th>Stok Adedi</th>
        <th>Açıklama</th>
        <th>Kategori</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            products.map(products =>(
                <tr key={products.id} >
                <td>{<Link to={`/products/${products.id}`} >{products.productName}</Link>} </td>
                <td>{products.unitPrice}</td>
                <td>{products.unitsInStock}</td>
                <td>{products.quantityPerUnit}</td>
                <td>{products.category.categoryId}</td>
                <td><Button onClick={()=>handleAddToCart(products)}>sepete ekle</Button></td>
              </tr>
            ))
        }
    </tbody>
  </Table>
  </Container>
  </div>
  )
}

