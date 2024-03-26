
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

import './brandImage.css'
import Productcard from './cards/Productcard';
import './brandImage.css'
import Producttitle from '../wrapper/Producttitle';
import useBrands from './customHooks/useBrands';
import { IMAGE_URL } from '../constants';


const Brands = () => {
    const brands = useBrands();
    console.log(brands);
    const productData = [{ name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 },]
   

    return (


        <div className="container" style={{ marginBottom: "4vh" }}>
            <div className=''><Producttitle title={"Brands We Work With"} /></div>



            <Marquee style={{ gap: '7vw', cursor: "pointer" }} pauseOnHover={true}>
                {brands.map(item => (
                    <div style={{ marginLeft: "6vw" }}>
                       
                        <img className='brandImage' src={ IMAGE_URL + item.image} alt='' />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Brands;