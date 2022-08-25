import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { employerLogout } from '../store/actions/employerActions';
import { candidateLogout } from '../store/actions/candidateActions';
import { useNavigate } from 'react-router-dom';


export default function SignedIn(signOut) {
  const dispatch = useDispatch()
  const { candidate } = useSelector(state => state)
  const { employer } = useSelector(state => state)
  let navigate = useNavigate();
  const handleSignOut = () => {
    if (candidate.candidateItems.id!=0) {
      dispatch(candidateLogout())
      navigate("/")
    } else {
      dispatch(employerLogout())
      navigate("/")

    }
  }

  return (
    <div>
      <Dropdown>
        <Image roundedCircle="true" style={{ height: "3em", width: "3em", marginLeft: "0.5em" }} src={candidate.candidateItems.id!=0? candidate.candidateItems.candidateImage:employer.employerItems.employerImage}  ></Image >
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
