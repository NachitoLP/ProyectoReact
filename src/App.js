import React from 'react';
import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './pages/inicio/inicio';
import Ropa from "./pages/ropa/ropa";
import Contacto from './pages/contacto/contacto';
import Perfumeria from './pages/perfumeria/perfumeria';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/ropa' element={<Ropa/>}/>
        <Route path="/perfumeria" element={<Perfumeria/>}></Route>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path="*" element={<h1 className='titulo_error'>Error 404: Recurso no encontrado</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
