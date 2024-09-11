import React from 'react'
import "./Maincomp.css"
import Banner from './Banner'
import './Home.css'
import './Banner.css'
import Slide from './Slide';

import { products,indieGames, preOrders, demos } from './Product';

const Maincomp = () => {
  return (
    <div className='homesect'>
      <div className="bannerpart">
        <Banner/>
      </div>
      <Slide title="Top 10 Games in Your Country"  products={products}/>
      
      <Slide title="Top 10 Indie Games" products={indieGames}/>
      <Slide title="Pre-orders" products={preOrders}/>
      <Slide title="Demos" products={demos}/>
      <div className="centreimg">
        <img src="https://tinyurl.com/yjyvd744" alt="" />
      </div>
     
    </div>
   
  )
}

export default Maincomp
