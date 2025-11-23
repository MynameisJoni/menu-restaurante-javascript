import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Home from './pages/Home';
import Header from './components/Header';
import Categorias from './pages/Categorias';
import Menu from './pages/Menu';
import Producto from './pages/Producto';

function noEncontrado(){
  return (
    <Container sx={{ py: 6, textAlign: "center"}}>
      <h2>Página no encontrada</h2>
    </Container>
  );
}

export default function App(){

  
  return (
    <div>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categorias' element={<Categorias />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/categorias/:idCategoria' element={<Menu />} />
          <Route path='/producto/:id' element={<Producto />} />
          <Route path='*' element= {noEncontrado()} />
        </Routes>
      </Container>
    </div>
  );
}
