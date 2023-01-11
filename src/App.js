import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Clicker from './components/Clicker';
import { Navbar } from "./components/Navbar";
import Button from 'react-bootstrap/Button';

function App() {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <Navbar />
      
      <Button variant="dark" size="lg" className='m-3' onClick={handleShow}>Clicker</Button>

      {show && <Clicker />}

      
    </div>
  );
}

export default App;
