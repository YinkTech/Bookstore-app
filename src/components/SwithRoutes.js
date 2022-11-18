import React from 'react';
import { NavBar } from './NavBar';
import { Category } from './Category';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import "./style.css"

const SwithRoutes = () => {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path='/' element={<App />} exact />
            <Route path='/Category' element={<Category />} />
        </Routes>
    </>
  );
};

export default SwithRoutes