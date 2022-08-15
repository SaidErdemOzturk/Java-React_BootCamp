import React from 'react'
import RegisterCandidate from '../pages/RegisterCandidate'
import RegisterEmployer from '../pages/RegisterEmployer'
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
            <Route exact path="/RegisterCandidate" element={<RegisterCandidate/>} />
            <Route exact path="/" element={<LoginPage/>}/>
            <Route exact path="/RegisterEmployer" element={<RegisterEmployer/>}/>
            </Routes>
           

      </Container>
    </div>
  )
}
