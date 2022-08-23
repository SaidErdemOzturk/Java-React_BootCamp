import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import AdvertService from '../services/advertService';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default function AdvertsList() {

    const [adverts, setAdverts] = useState([])

    useEffect(() => {
        let advertService = new AdvertService;
        advertService.getAll().then(response=>setAdverts(response.data.data))
    }, [])
    let navigate = useNavigate();
    function handleLink(id){
        navigate(`/adverts/${id}`)
    }
    
  
    return (
    <div>
        
        <Table striped bordered hover variant="dark" style={{marginTop:"3em"}}>
      <thead>
        <tr>
          <th>Başlık</th>
          <th>Açıklama</th>
          <th>Pozisyon</th>
          <th>Maksimum ücret</th>
          <th>Minimum ücret</th>
          <th>Açık pozisyon sayısı</th>
          <th><Button variant='dark'>Başvuru bitiş tarihi</Button></th>
          <th><Button variant='dark'>Şirket Adı</Button></th>

        </tr>
      </thead>
      <tbody>
        {
            adverts.map(adverts=>(
                <tr key={adverts.id} onClick={()=>handleLink(adverts.id)}>
                <td>{adverts.title}</td>
                <td>{adverts.jobDescription}</td>
                <td>{adverts.position}</td>
                <td>{adverts.maxWage}</td>
                <td>{adverts.minWage}</td>
                <td>{adverts.open_position_count}</td>
                <td>{adverts.deadline}</td>
                <td>{adverts.employer.companyName}</td>
                
                </tr>
                
            ))
        }
      </tbody>
    </Table>
    </div>
  )
}
