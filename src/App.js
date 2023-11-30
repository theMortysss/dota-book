import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import HeroPage from './pages/HeroPage';

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

import './styles/main.css'


function App() {
    return (
        <div className='app'>
            <Nav />
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/hero/:id' element={<HeroPage />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    )
}

export default App