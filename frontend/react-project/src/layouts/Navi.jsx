import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignedOut from './SignedOut';
import Button from 'react-bootstrap/Button';
import SignedIn from './SignedIn';
import { useNavigate } from 'react-router-dom';
import CartSummary from './CartSummary';
import {useSelector} from 'react-redux';
import { cartItems } from '../store/initialValues/cartItems';


export default function Navi() {

  const [isAuthenticated, setisAuthenticated] = useState(false)
  const {cartItems} = useSelector(state=>state.cart)
  const navigate = useNavigate()

  function handleSignOut(params){
    setisAuthenticated(false)
    navigate("/")
  }

  function handleSignIn(params){
    setisAuthenticated(true)
  }
  return (
    
    <div>    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">
            </Nav.Link> 
       
        </Nav>
        {cartItems.length>0&&<CartSummary/>}
       {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
      </Container>
    
    </Navbar>
  </></div>
 
  )
}
