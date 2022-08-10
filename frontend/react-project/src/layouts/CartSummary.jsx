import React from 'react'
import { FormLabel } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useSelector} from 'react-redux';

export default function CartSummary() {

  const {cartItems} = useSelector(state=>state.cart )
  
  return (
    <div>     
       <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary" style={{marginRight:"0.5em"}}>
      Sepetim
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      {
        cartItems.map((cartItems) =>(
          <Dropdown.Item key={cartItems.product.id}>{cartItems.product.productName}
          <FormLabel>{cartItems.quantity}</FormLabel>
          </Dropdown.Item>
        ))
      }
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </div>
  )
}
