import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import ListingPage from './ListingPage';
import UserPage from './UserPage';
import './Styles.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/listing" element={<ListingPage />} />
                <Route path="/user/:name" element={<UserPage />} />
            </Routes>
        </Router>
    );
}

export default App;