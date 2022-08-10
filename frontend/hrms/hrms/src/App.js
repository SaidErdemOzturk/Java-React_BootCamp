import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container><Dashboard/></Container>
    </div>
  );
}

export default App;
