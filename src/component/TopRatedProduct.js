import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryTitle from '../wrapper/CategoryTitle.js'

import Productcard from "./cards/Productcard.js";
import Producttitle from "../wrapper/Producttitle.js";
import ProductSlider from "./ScrollComponent/ProductSlider.js";


const TopRatedProduct = () => {
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
    const productData = [{ name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 }, { name: "10w40 United Oil", image: '/car-service-white-background-isolated-3d-illustration.jpg', price: 2.222 },]
    return (
        <div className="">
            <ProductSlider  title={<Producttitle title={"Top Rated Products"} />} >
                {productData.map(item => {
                    return (<Productcard name={item.name} image={item.image} price={item.price} />)
                })}
            </ProductSlider>
        </div>

    )
}

export default TopRatedProduct