import React, { useEffect, useState } from 'react';
import '../styles/sell.css';
import  {firebase} from 'firebase/app'
import 'firebase/database';
import { dataref } from './firebase';

const Sell = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(''); 
  const [responseMessage, setResponseMessage] = useState('');
  const[item,setItem]=useState([]);
   
  const handleNameChange = (e) => {
     setName(e.target.value);
  };
  const handleImageChange = (e) => {
     setImage(e.target.value);
  };
  const handlePriceChange = (e) => {
     setPrice(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit= (e)=>{
    e.preventDefault();
   // setName(name);
   if(name!==""){
    dataref.ref().child("shop-Items").push(name);
   // setName("");
   }
   if(price!==""){
    dataref.ref().child("shop-Items").push(price);
   // setPrice("");
   }
   if(desc!==""){
    dataref.ref().child("shop-Items").push(desc);
    setDesc("");
   }
   dataref.ref().child("shop-Items").push(image);
      
  };

  useEffect(()=>{
    dataref.ref().child("shop-Items").on('value',data=>{
      const getData=Object.values(data.val)
      setItem(getData);
      
    },[]);
    console.log(item);
  })

  return (
    <div className='seller-container'>
      <div className='form-container'>
        <h1>sell with us</h1>
        <div className='seller formm'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Enter Item name:</label>
              <input name='name' id='name' placeholder='Enter Item name' value={name} onChange={handleNameChange} />
            </div>
            <div>
              <label htmlFor='price'>Enter Item prices:</label>
              <input name='price' id='price' placeholder='Enter Item Price' value={price} onChange={handlePriceChange} />
            </div>
            <div>
              <label htmlFor='desc'>Enter Item Description</label>
              <input name='desc' id='desc' placeholder='Enter Item description' value={desc} onChange={handleDescChange} />
            </div>
            <div>
              <label htmlFor='desc'>Enter Item Description</label>
              <input type='file' id='myFile' name='filename' onChange={handleImageChange }/>
            </div>ssss
            <div className='btn-holder'>
               <button className='sellBtn' type='submit'   >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sell;


