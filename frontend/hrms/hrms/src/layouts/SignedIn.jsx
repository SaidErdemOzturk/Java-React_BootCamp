import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/userActions';
import { useNavigate } from 'react-router-dom';


export default function SignedIn(signOut) {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state)
  let navigate = useNavigate();
  const handleSignOut = () => {
    console.log(user)
    dispatch(logout())
    console.log(user)
    navigate("/")
  }


  return (
    <div>
      <Dropdown>
        <Image roundedCircle="true" style={{ height: "3em", width: "3em", marginLeft: "0.5em" }} src='https://bczl.meb.k12.tr/meb_iys_dosyalar/34/06/969693/resimler/2021_04/k_02102337_2118fbf0-51e6-477f-b6f7-175761b15217.jpg'></Image>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="link">
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Bilgilerim
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleSignOut} >Çıkış yap</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
