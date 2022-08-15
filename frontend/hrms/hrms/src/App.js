import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import Container from 'react-bootstrap/Container';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Sidebar/><Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
