import React from 'react';
import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from './pages/inicio/inicio';
import ItemListDetail from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListGeneral from './components/ItemListContainer/ItemContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/categoria/:catID' element={<ItemListGeneral/>}/>
        <Route path='/item/:id' element={<ItemListDetail/>}/>
        <Route path="*" element={<h1 className='titulo_error'>Error 404: Recurso no encontrado</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
