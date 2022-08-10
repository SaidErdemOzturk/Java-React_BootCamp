import React from 'react'
import HomePage from '../pages/HomePage'
import { Route,Routes} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import LoginPage from '../pages/LoginPage';
import EmployerList from '../pages/EmployerList';

export default function Dashboard() {
  return (
    <div>
        
        <Container>
            <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/loginpage" element={<LoginPage/>}/>
            <Route exact path="/employers" element={<EmployerList/>}/>
            </Routes>
           

      </Container>
    </div>
  )
}
