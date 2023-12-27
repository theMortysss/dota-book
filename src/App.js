import React, { lazy, Suspense} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import HeroPage from './pages/HeroPage';
// import CreatePage from './pages/CreatePage';

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

import './styles/main.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const HeroPage = lazy(() => import('./pages/HeroPage'))
const CreatePage = lazy(() => import('./pages/CreatePage'))


function App() {
    return (
        <div className='app'>
            <Nav />
            <Router>
                <Routes>
                    <Route path='/' element={<Suspense fallback={<p>Загрузка</p>}> <HomePage /> </Suspense>} />
                    <Route path='/hero/:id' element={<Suspense fallback={<p>Загрузка</p>}> <HeroPage /> </Suspense>} />
                    <Route path='/create' element={<Suspense fallback={<p>Загрузка</p>}> <CreatePage /> </Suspense>} />
                </Routes>
            </Router>
            <Footer />
        </div>
    )
}

export default App