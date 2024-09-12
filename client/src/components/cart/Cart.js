import React from 'react'
import './cart.css';
const Cart = () => {
  return (
    <div className='cartsect'>
    <div className="cartcontainer">
    
      <div className="leftcart">
        <img src="https://tinyurl.com/3nw72h3h" alt="Elden Ring" className="product-image" />
        <div className="cartbtn">
          <button className='cartbtn1'>Add to Cart</button>
          <button className='cartbtn2'>Buy Now</button>
        </div>
      </div>
      
     
      <div className="rightcart">
        <h3>Elden Ring</h3>
        <h4>THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.</h4>
        
        <div className="details">
          <p className='author'>By BANDAI NAMCO ENTERTAINMENT EUROPE</p>
          <p className="platform">Platform: <span>PlayStation 5</span></p>
          <p className="rating">⭐ 4.8/5 (25,000 reviews)</p>
          <p className='cost'>Price: <span className="price-current">Rs 2,449</span> <span className="price-old">Rs 3,449</span></p>
        </div>

        <div className="stock">
          <p className="in-stock">In stock</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart
// https://tinyurl.com/3nw72h3h