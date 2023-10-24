import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './pages/Home';
import Hero from './pages/Hero';

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

import './styles/main.css'

function App() {
    return (
        <div className='app'>
            <Nav />
            <Router>      
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/hero/:id' element={<Hero />} />
                </Routes>   
            </Router>  
            <Footer />     
        </div>
    )
}

export default App