import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import Footer from './layouts/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navi/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
