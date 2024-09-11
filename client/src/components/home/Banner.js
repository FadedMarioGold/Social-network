import React from 'react'
import Carousel from 'react-material-ui-carousel'

const data=[
"https://tinyurl.com/477hh32n","https://tinyurl.com/y2v8u8cc","https://tinyurl.com/4mb3ud2u","https://tinyurl.com/4rrxx4nf"

]
const Banner = () => {
  return (
  <Carousel className='carousel' autoPlay={true} animation="slide" indicators={false} navButtonsAlwaysInvisible="true">
  {
    data.map((imag,i)=>{
      return(
        <div key={i}>
          <img src={imag} alt={`Banner ${i + 1}`} className='bannerimg' />
        </div>
      )
    })
  }
  </Carousel>
  )
}

export default Banner
