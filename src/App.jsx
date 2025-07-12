import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Header/Navbar'; 
import Body from './Main/Body'; 
import Section2 from './Main/Section2';
import { Outlet } from 'react-router-dom';
import HotelFooter from './Footer/HotelFooter';

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}
export default App;
