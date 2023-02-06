import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Footer } from './components/Footer';

function App() {

  return (

    <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element/>
          <Route path='/tienda' element={ <ItemListContainer /> }/>
          <Route path='/nosotros' element/>
          <Route path='*' element={ <Navigate to={"/"}/> }/>
        </Routes>

        <Footer />
      </BrowserRouter>

  );
}

export default App;

