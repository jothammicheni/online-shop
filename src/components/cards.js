import React from 'react'
//import  '../styles/card.css'
const Cards = ({item ,addiTemsToCart}) => {
    const{id,name,image,price}=item;
  return (
    <div>
       <div>
        <img src={item.image}/>
       </div>
       <div>
        <p>{item.name}</p>
        <p>Price :{item.price}</p>
       </div>
       <div>
        <button className='addCartBtn' onClick={()=>addiTemsToCart(item)}>Add to cart</button>
       </div>
    </div>
  )
}

export default Cards
