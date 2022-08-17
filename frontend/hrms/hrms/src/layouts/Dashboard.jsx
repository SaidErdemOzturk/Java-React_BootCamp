import React from 'react'
import RegisterCandidate from '../pages/RegisterCandidate'
import RegisterEmployer from '../pages/RegisterEmployer'
import { Route,Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CandidateLoginPage from '../pages/CandidateLoginPage';
import CandidateHomePage from '../pages/CandidateHomePage';

export default function Dashboard() {
  return (
    <div>
        
        <Container>
            <Routes>
            <Route exact path="/registercandidate" element={<RegisterCandidate/>} />
            <Route exact path="/candidateloginpage" element={<CandidateLoginPage/>}/>
            <Route exact path="/registeremployer" element={<RegisterEmployer/>}/>
            <Route exact path="/candidatehomepage" element={<CandidateHomePage/>}/>
            </Routes>
           

      </Container>
    </div>
  )
}
