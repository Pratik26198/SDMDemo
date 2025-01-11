import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddItemPage from './pages/AddItemPage';

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddItemPage />} />
        </Routes>
    </Router>
);

export default App;
