import React from 'react'
import RegisterCandidate from '../pages/RegisterCandidate'
import RegisterEmployer from '../pages/RegisterEmployer'
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CandidateLoginPage from '../pages/CandidateLoginPage';
import CandidateHomePage from '../pages/CandidateHomePage';
import HomePage from '../pages/HomePage';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import AdvertsDetail from '../pages/AdvertsDetail';
import AdvertsList from '../pages/AdvertsList';
import EmployerLoginPage from '../pages/EmployerLoginPage';


export default function Dashboard() {
  const { user } = useSelector(state => state);
  return (
    <div>

      <Container>
        <Routes>
          <Route exact path="/registercandidate" element={<RegisterCandidate />} />
          <Route exact path="/candidateloginpage" element={<CandidateLoginPage />} />
          <Route exact path="/registeremployer" element={<RegisterEmployer />} />
          <Route path="/"element={<HomePage/>}/>
          <Route exact path="/candidatehomepage" element={<CandidateHomePage />} /> 
          <Route exact path="/adverts/:id" element={<AdvertsDetail/>} /> 
          {/* buradaki :id advertsDetails kısmındaki useParams ile eşleşiyor. */ }
          <Route exact path="/employerloginpage" element={<EmployerLoginPage />} />
          <Route exact path="/adverts" element={<AdvertsList/>} />
        </Routes>


      </Container>
    </div>
  )
}
