import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Slider from 'react-slick';
import './hero.css'

const HeroSlider = () => {
    const settings  = {
        dots : true,
        infinite : true,
        speed : 500,
        slideToShow : 1,
        slidesToScroll : 1,
        // nextArrow : <SampleNextArrow/>,
        // prevArrow : <SamplePrevArrow/>     
     }
      return (
      <div className='flex'>
          <Slider {...settings}>
            <div>
                <img style={{width:'100%', height:'100%' , backgroundRepeat : 'no-repeat'}} src='' alt='cvfv'/>
            </div>
            <div>
                <img style={{width:'100%', height:'100%' , backgroundRepeat : 'no-repeat'}} src='' alt='ffff'/>
            </div>
            <div>
                <img style={{width:'100%', height:'100%' , backgroundRepeat : 'no-repeat'}} src='' alt='f fevf'/>
            </div>
    
        </Slider>
      </div>
      )
    }
    

    

export default HeroSlider 


  

 

 

 

 