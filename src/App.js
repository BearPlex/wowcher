// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="overview" element={<Overview />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;