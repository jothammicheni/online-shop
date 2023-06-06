import React from 'react'
import '../styles/navbar.css'
//import  BrowserRouter
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
const Navba = ({size}) => {
  return (
    
    <div className='nav-container'>
    <div className='nav'>
     <NavLink to={'/'}> Shop</NavLink>
    </div>
    <div className='nav'>
    <ul>
       <li> <NavLink to={'/'}>Buy</NavLink></li>
       <li><NavLink to={'/sell'}>Sell</NavLink></li>
       <li> <NavLink to={'/cart'}>  Cart<span>{size}</span></NavLink></li>
    </ul>
    
     
    
    
    </div>
</div>
 
  )
  
}

export default Navba
