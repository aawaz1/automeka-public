
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

import './brandImage.css'
import Productcard from './cards/Productcard';
import './brandImage.css'


const Brands = () => {
    const productData = [{ name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 },]
    // const [brands, setBrands] = useState([])
    
    // useEffect(() => {
    //     const getAllBrands = async () => {
    //         try {
    //             const { data } = await axios.get(
    //                 `https://restapi.ansoftt.com:4321/v1/brand/`
    //             );
    //             setBrands(data?.data);
               
    //         } catch (error) {
    //             console.error("Error fetching brands:", error);
    //         }
    //     }
    //     getAllBrands();
    // }, []);

    return (
        
     
        <div className="container" style={{marginBottom : "4vh"}}>
            
           
        
            <Marquee style={{gap : '7vw' , cursor : "pointer"}} pauseOnHover={true}>
            {productData.map(item => (
                    <div style={{ marginLeft : "6vw"}}>
                    {/* <h4>{brand?.name}</h4> */}
                    <img className='brandImage' src={item.image} alt='' />
                </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Brands;