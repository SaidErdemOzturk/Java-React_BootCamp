import React, { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import ProductService from '../services/productService';

export default function ProductList() {

    const [products, setproducts] = useState([])

    useEffect(()=>{
        let productService = new ProductService;
        productService.getProducts().then(result=>setproducts(result.data.data))
    })
  return (
    <div> <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Ürün Adı</th>
        <th>Birim Fiyatı</th>
        <th>Stok Adedi</th>
        <th>Açıklama</th>
        <th>Kategori</th>
      </tr>
    </thead>
    <tbody>
        {
            products.map(products =>(
                <tr key={products.id}>
                <td>{products.productName}</td>
                <td>{products.unitPrice}</td>
                <td>{products.unitsInStock}</td>
                <td>{products.quantityPerUnit}</td>
                <td>{products.category.categoryId}</td>
        
              </tr>

            ))
        }
    </tbody>
  </Table></div>
  )
}
