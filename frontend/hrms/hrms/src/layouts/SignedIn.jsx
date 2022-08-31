import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/actions/userActions';
import { ToastContainer, toast } from 'react-toastify';


export default function SignedIn(signOut) {
  const {user} = useSelector(state=>state)
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const handleSignOut = () => {
    toast.success("çıkış başarılı")
    navigate("/")
    dispatch(logout())
  }

  return (
    <div>
      <Dropdown>
        {console.log(user)}
        <Image roundedCircle="true" style={{ height: "3em", width: "3em", marginLeft: "0.5em" }} src={user.userItems.imageUrl} ></Image >
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="link">
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Bilgilerim
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleSignOut} >Çıkış yap</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown >
    </div >
  )
}
