
//import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import CollapsibleExample from './components/navbar2';
import Navba from './components/navbar';
import Home from './pages/home';
import Sell from './pages/sell';
import Cart from './pages/cart';
import { useState } from 'react';
//import faker from 'faker.js'
function App() {
  const[cart,setCart]=useState([])



 const  addiTemsToCart=(item)=>{
  let isadded=false;
  cart.forEach((product)=>{
    if(item.id===product.id){
       alert("Item already aded to cart")
       isadded=true;
    }
  })
  if(!isadded){
    setCart([...cart,item])

    console.log(cart)
  }



  }

  
  return (
    <div className="App">
    <Router>
          <Navba size={cart.length}/>
          <CollapsibleExample/>
      <Routes>
          <Route path='/'  element={<Home addiTemsToCart={addiTemsToCart}/>}/>
          <Route path='/sell' Component={Sell}/>
          <Route path='/cart' element={<Cart  cart={cart} setCart={setCart}/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
