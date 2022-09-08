import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import AdvertService from '../services/advertService'
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { Container, NavLink, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import CustomCard from '../utilities/customLayouts/customCard';

export default function HomePage() {

  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    let advertService = new AdvertService;
    advertService.getAll().then(result => setAdverts(result.data.data))

  }, [])
  var count = 0

  return (
    
    <div>
      {adverts[0] != undefined?<CustomCard adverts={adverts[0]}/>:null}
      {adverts[1] != undefined?<CustomCard adverts={adverts[1]}/>:null}
      {adverts[2] != undefined?<CustomCard adverts={adverts[2]}/> : null}
                  <Link to={"/adverts"}>Tümünü gör</Link>
    </div>

  )
}
