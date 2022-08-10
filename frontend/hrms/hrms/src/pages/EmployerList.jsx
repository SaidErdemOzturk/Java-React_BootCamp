import React, { useState } from 'react'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import EmployerService from '../services/employerService';

export default function EmployerList() {

  const [employers, setEmployers] = useState([])


  useEffect(()=>{
    let employerService = new EmployerService;
    employerService.getAll().then(result=>setEmployers(result.data.data))
},[])

  return (
    <div>
         <Table striped hover variant='light' style={{marginTop:"3em"}}>
    <thead>
      <tr>
        <th>Company Name</th>
        <th>Web Site</th>
        <th>Phone Number</th>
      </tr>
    </thead>
    <tbody>
        {
            employers.map(employers =>(
            <tr key={employers.employerId}>
                <td><Link to={`/employer/${employers.employerId}`}>{employers.companyName}</Link></td>
                <td>{employers.webSite}</td>
                <td>{employers.phoneNumber}</td>
            </tr>    
            ))
            
        }
    </tbody>
  </Table></div>
  )
}
