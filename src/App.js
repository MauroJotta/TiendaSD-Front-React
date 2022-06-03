import React from 'react';
import './App.css';
import NavbarHeader from './Components/Navbar/NavbarHeader';
import FooterTienda from './Components/Footer/FooterTienda';
import { Routes, Route } from 'react-router-dom';
import Productos from './Components/Productos/Productos';

function App() {
            
    return (
    
        <div className="App bgTienda">
            <NavbarHeader />
            <Routes>
                <Route exact path="/" element={<Productos />} />
            </Routes>
            <FooterTienda />
        </div>
            
  );
}

export default App;
