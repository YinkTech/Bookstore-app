import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-sec'>
        <Link className='logo' to="/"> Moviestore CMS </Link>
        <div className='links'>
          <Link to="/"> Movies </Link>
          <Link to="/Category">Categories </Link>
        </div>
      </div>
        <i className='bi bi-person-circle'></i>
    </div>
  );
};
