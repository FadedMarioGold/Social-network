import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Product, products} from './Product';

import './Slide.css';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Slide = ({title,products}) => {
  return (
    <div className='productsect'>
      <div className="deals">
        <h3>{title}</h3>
      </div>
      <Carousel    
      responsive={responsive} 
        draggable={false}   
        swipeable={true}   
        infinite={true}  
        autoPlay={true} 
        autoPlaySpeed={4000} 
        keyBoardControl={true} 
        removeArrowOnDeviceType={["tablet", "mobile"]} 
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" 
        containerClass="carousel-container"
  >
        {
            products.map((e)=>{
                return(
                    <div className="proditem">
                        <div className="prodimg">
                            <img src={e.url} alt="productitem" />
                        </div>
                        <p className='prodname'>{e.title.longTitle}</p>
                        <p className='prodprice'>{`Rs${e.price.cost}`}</p>
                        <p className='prodtag'>{e.tagline}</p>
                
                   </div>
                )
                
            })
        }
      </Carousel>
    </div>
  )
}

export default Slide
