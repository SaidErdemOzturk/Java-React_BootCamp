import React, { useState } from 'react'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import EmployerRecourseService from '../services/employerRecourseService';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


let employerRecourseService = new EmployerRecourseService;

export default function EmployerRecourse() {

  const {user} = useSelector(state=>state)
  const [recourse, setrecourse] = useState([])
  useEffect(() => {
    console.log(user)
    employerRecourseService.getByEmployerId(user.userItems.id).then(response=>(
      setrecourse(response.data.data)
    ))
  }, [])


  function handleRecourse(id){
    employerRecourseService.delete(id).then(response=>(
      response.data.success?toast.success(response.data.message):toast.error(response.data.message)
    ))
  //sayfa yenileme yapılacak
  }
  
  return (
    <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Position</th>
          <th>Job Description</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Candidate Email</th>
          <th>Recourse Status</th>
        </tr>
      </thead>
      <tbody>
        {recourse.map(recourse=>(
          <tr key={recourse.id}>
            <td>{recourse.advertRecourse.position}</td>
            <td>{recourse.advertRecourse.jobDescription}</td>
            <td>{recourse.candidateRecourse.firstName}</td>
            <td>{recourse.candidateRecourse.lastName}</td>
            <td>{recourse.employerRecourse.email}</td>
            <td>{recourse.status}</td>
            <td><DropdownButton id="dropdown-basic-button" title="İşlemler">
                <Dropdown.Item href="#/action-1">Başvuruyu Kabulet</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Başvuruyu Reddet</Dropdown.Item>
                </DropdownButton></td>

          </tr>
        ))}
      </tbody>
    </Table>
        
    </div>
  )
}
