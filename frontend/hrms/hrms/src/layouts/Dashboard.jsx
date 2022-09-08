import React from 'react'
import CandidateRegister from '../pages/CandidateRegister'
import EmployerRegister from '../pages/EmployerRegister'
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CandidateLoginPage from '../pages/CandidateLoginPage';
import CandidateHomePage from '../pages/CandidateHomePage';
import HomePage from '../pages/HomePage';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import CandidateAdvertsDetail from '../pages/CandidateAdvertsDetail';
import EmployerAdvertsDetail from '../pages/EmployerAdvertsDetail';
import AdvertsList from '../pages/AdvertsList';
import EmployerLoginPage from '../pages/EmployerLoginPage';
import EmployerHomePage from '../pages/EmployerHomePage';
import AdvertsAdd from '../pages/AdvertsAdd';
import CandidateProfile from '../pages/CandidateProfile';
import CandidateUpdateProfile from '../pages/CandidateUpdateProfile';
import CandidateRecourse from '../pages/CandidateRecourse';
import EmployerRecourse from '../pages/EmployerRecourse';
import EmployerProfile from '../pages/EmployerProfile';
import EmployerUpdateProfile from '../pages/EmployerUpateProfile';
import EmployerAdvertRecourses from '../pages/EmployerAdvertRecourses';


export default function Dashboard() {
  const { user } = useSelector(state => state);
  return (
    <div>

      <Container>
        <Routes>
          <Route path="/"element={<HomePage/>}/>

          <Route exact path="/candidate/register" element={<CandidateRegister />} />
          <Route exact path="/employer/register" element={<EmployerRegister />} />
          <Route exact path="/candidate/loginpage" element={<CandidateLoginPage />} />
          <Route exact path="/employer/loginpage" element={<EmployerLoginPage />} />
          <Route exact path="/employer/homepage" element={<EmployerHomePage />} /> 
          <Route exact path="/candidate/homepage" element={<CandidateHomePage />} /> 
          <Route exact path="/candidate/recourse" element={<CandidateRecourse />} /> 
          <Route exact path="/employer/recourse" element={<EmployerRecourse />} /> 
          <Route exact path="/employer/recourse/:id" element={<EmployerAdvertRecourses/>} /> 
          <Route exact path="/candidate/adverts/:id" element={<CandidateAdvertsDetail/>} /> 
          <Route exact path="/employer/adverts/:id" element={<EmployerAdvertsDetail/>} /> 
          {/* buradaki :id advertsDetails kısmındaki useParams ile eşleşiyor. */ }
          <Route exact path="/adverts" element={<AdvertsList/>} />
          <Route exact path="/candidate/profile" element={<CandidateProfile/>} />
          <Route exact path="/employer/profile" element={<EmployerProfile/>} />
          <Route exact path="/employer/updateprofile" element={<EmployerUpdateProfile/>} />
          <Route exact path="/candidate/updateprofile" element={<CandidateUpdateProfile/>} />
          <Route exact path="/employer/advertadd" element={<AdvertsAdd/>} />
        </Routes>


      </Container>
    </div>
  )
}
