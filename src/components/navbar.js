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
import { useUser } from '../context/context';
const Navba = ({size}) => {

  let {light,dark,setTheme,theme}=useUser()
  
  const handleThemeChange = () => {
    if (theme === '') {
      setTheme(dark);
      document.body.style.backgroundColor = dark;
      // document.querySelector('.nav-container').style.backgroundColor=light
      // document.querySelectorAll('li').forEach((li)=>{li.style.color=dark})
    } else {
      setTheme('');
      document.body.style.backgroundColor = light;
      // document.querySelector('.nav-container').style.backgroundColor=dark
      // document.querySelectorAll('li').forEach((li)=>{li.style.color=light})
      
    }
  };
  return (
    
    <div className='nav-container'>
    <div className='nav'>
     <NavLink to={'/'}> Shop</NavLink>
    </div>
    <div className='nav'>
    <ul>
       <li> <NavLink to={'/'}>Buy</NavLink></li>
       <li><NavLink to={'/sell'}>Sell</NavLink></li>
       <li><NavLink to={''}  
          onClick={handleThemeChange}
       >theme</NavLink></li>
       <li> <NavLink to={'/cart'}>  Cart<span>{size}</span></NavLink></li>
    </ul>
    
     
    
    
    </div>
</div>
 
  )
  
}

export default Navba
