import React from 'react'
import EndrosementCard from './cards/Endrosementcard'
import ProductSlider from './ScrollComponent/ProductSlider';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const Endrosement = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const productData = [{ name: "10w40 United Oil", image: '/Group 42735.png', price: 2.222 }]

    return (
        <div className='flex p-4 flex-col justify-center items-center text-center bg-gray-100'>
            <h2 className='font-bold font-poppins text-center text-[1.2rem]'>Why Choose Automeka ?</h2>
            <p className='text-gray-400 font-thin font-poppins'>repairing a damage vehicle <br /> can be expensive using the <br /> automeka product is a good solution if you are on budget.</p>


            {console.log("ProductL ", productData)}
            <div className='w-[100%] md:w-[30%]'> {productData?.length ?
                <ProductSlider responsiveProp={responsive}>
                    {productData?.map(item => {
                        return (
                            <EndrosementCard name={item.name} image={item.image} key={item.name} />
                        )
                    })}
                </ProductSlider>
                : null}
            </div>
        </div>
    )
}

export default Endrosement