import React from 'react'
import RegisterCandidate from '../pages/RegisterCandidate'
import RegisterEmployer from '../pages/RegisterEmployer'
import { Route,Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LoginPage from '../pages/LoginPage';

export default function Dashboard() {
  return (
    <div>
        
        <Container>
            <Routes>
            <Route exact path="/RegisterCandidate" element={<RegisterCandidate/>} />
            <Route exact path="/loginpage" element={<LoginPage/>}/>
            <Route exact path="/RegisterEmployer" element={<RegisterEmployer/>}/>
            </Routes>
           

      </Container>
    </div>
  )
}
