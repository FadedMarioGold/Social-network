import React from 'react';
import './buynow.css';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {
  return (
    <div className='buysect'>
      <div className="buycontainer">
      
        <div className="leftbuy">
          <h1>Cart</h1>
          <p>Confirm your order</p>
          <span className='leftbuyprice'>Price</span>
         
          <div className="itemcontainer">
            <img src="https://tinyurl.com/3nw72h3h" alt="Elden Ring" className="product-image" />
            
            <div className="itemdetail">
              <h3>ELDEN RING PS4 & PS5</h3>
            <h3 className='differentprice'>Rs 2,449</h3>
              
            
              <Option />
            </div>
              <h3 className='itemprice'>Rs 2,449</h3>
              </div>
              <Subtotal />
            
         
        </div>

        <Right />
        
      </div>
    </div>
  );
}

export default Buynow;
