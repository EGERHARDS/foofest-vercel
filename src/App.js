import logo from './logo.svg';
import './App.css';
import {OpeningPage} from './pages/OpeningPage';
import {BookingPage} from './pages/BookingPage';
import {Homepage} from './pages/Homepage';
import { CartProvider } from './components/booking/CartContext';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <CartProvider>
    <div className="App">
   <Router>
        <Routes>
          <Route path="/home"  element={<Homepage/>} />
          <Route path="/enter"  element={<OpeningPage/>} />
          <Route path="/booking/:name" element={<BookingPage/>} />
          <Route path="/contact" element={<OpeningPage/>} />
          <Route path="/tickets" element={<OpeningPage/>} />

          {/* <Route path="/page2" component={Page2} /> */}
        </Routes>
    </Router>
    </div>
    </CartProvider>
  );
}

export default App;
