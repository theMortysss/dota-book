import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './pages/Home';
import Hero from './pages/Hero';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className='app'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/hero' element={<Hero/>} />
                </Routes>  
                <Footer />        
            </Router>    
        </div>
    )
}

export default App