import "react-multi-carousel/lib/styles.css";
import CategoryTitle from '../wrapper/CategoryTitle.js'

import Categorycard from "./cards/Categorycard";
import ProductSlider from "./ScrollComponent/ProductSlider.js";
import { useState } from "react";
import useCategory from "./customHooks/useCategory.js";
import { Audio } from 'react-loader-spinner'


const Categories = () => {
    
   const categories = useCategory();
   console.log(categories);
   if(categories === null ) return <Audio
   height="80"
   width="80"
   radius="9"
   color="green"
   ariaLabel="loading"
   wrapperStyle
   wrapperClass
 />;
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
    const categoryData = [{ title: "Accessories", image: '/car-service-white-background-isolated-3d-illustration.jpg' }, { title: "Accessories", image: '/car-service-white-background-isolated-3d-illustration.jpg' }, { title: "Accessories", image: '/car-service-white-background-isolated-3d-illustration.jpg' }, { title: "Accessories", image: '/car-service-white-background-isolated-3d-illustration.jpg' }, { title: "Accessories", image: '/car-service-white-background-isolated-3d-illustration.jpg' },]
    return (
        <>
            <ProductSlider title={<CategoryTitle />} >
                {
                    categories.map(item => {
                        return (<Categorycard title={item.name.toUpperCase()} image={item?.image} />)
                    })
                }
            </ProductSlider>
        </>
    )
}

export default Categories