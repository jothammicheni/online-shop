import React, { useEffect, useState } from 'react'
import { ITEMS } from '../components/products';
import '../styles/home.css'
import Cards from '../components/cards';
const Home = ({addiTemsToCart}) => {
 return  <div className='home-container'>

 {
  ITEMS.map((item)=>{
    return <Cards item={item}  key={item.id} addiTemsToCart={addiTemsToCart}/>
  })
 } 
 
 </div>
}

export default Home
