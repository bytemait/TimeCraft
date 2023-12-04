import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/standard/Navbar';
import Home from './components/standard/Home';
import Footer from './components/standard/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
