
import './App.css';
import DashBoard from './layouts/DashBoard';
import Navi from './layouts/Navi';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="a">
      <DashBoard/>
      </Container>

    </div>
  );
}

export default App;
