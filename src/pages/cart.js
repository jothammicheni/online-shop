import React, { useEffect, useState } from 'react'
import '../styles/cart.css'
export default function Cart({cart,setCart}){
const[price,setprice]=useState(0)

   const setTotalPrice=(item)=>{
     let total=0;
     cart.map((item)=>{
        total +=item.amount*item.price;
       
     })
     console.log(item.price)
     console.log(cart)

     setprice(total);

     
   }
   const removeCart=(id)=>{
    const  err=cart.filter((item)=>item.id!==id)
    setCart(err)
     
    }


   useEffect(()=>{
    setTotalPrice(price)

    //alert(price)
 })
   

    

  return (
    <div className='cart-body'>
    <div  className='cart-container'>
    <h1>your carts</h1>
    <p className='total'>Total cart Price: {price}</p>
        {
          cart.map((item)=>{
           return <div className='item-container' key={item.id}>
            <div className='cart-image'>
                <img className='img' src={item.image}/>
            </div>
            <div>
                <p>{item.name}</p>

            </div>


            <div className='inc-btn'>
             <button className='inc-AmountBtn'>-</button>
             <p>{item.amount}</p>
             <button  className='dec-AmountBtn'>+</button>
            </div>

            <div className=' remove-cart'>
              <p>{item.price}</p>
              <button className='removeBtn' onClick={()=>removeCart(item.id)}>Remove cart</button>
            </div>

           
           </div>

          })
        }
       
    </div>
    </div>
  )
}

//export default Cart
