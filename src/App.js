import logo from './logo.svg';
import './App.css';
import {OpeningPage} from './pages/OpeningPage';
import {BookingPage} from './pages/BookingPage';
import {Homepage} from './pages/Homepage';
import { CartProvider } from './components/booking/CartContext';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/booking/Navbar'; 
import { AccommodationView } from './components/booking/AccommodationView';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/tickets" element={<OpeningPage />} />
            <Route path="/booking/:name" element={<BookingPage />} />
            <Route path="/booking/:name" element={<AccommodationView />} />
            <Route path="/tickets" element={<OpeningPage />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
