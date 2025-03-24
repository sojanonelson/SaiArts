import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/Home';
import ProductScreen from './screens//Product';
import WorksScreen from './screens/Work';
import FeedbackScreen from './screens/Feedback';

import Navbar from './components/Navbar';
import ContactInfo from './components/contact';
import Register from './screens/Register';
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <ContactInfo/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/works" element={<WorksScreen />} />
        <Route path="/feedback" element={<FeedbackScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
