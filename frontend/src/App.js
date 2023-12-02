import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthState from './context/auth/authState';

function App() {
    return (
        <Router>
            <AuthState>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                </Routes>
                <Footer />
            </AuthState>
        </Router>
    );
}

export default App;
