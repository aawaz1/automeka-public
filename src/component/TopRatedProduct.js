import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryTitle from '../wrapper/CategoryTitle.js'

import Productcard from "./cards/Productcard.js";
import Producttitle from "../wrapper/Producttitle.js";
import ProductSlider from "./ScrollComponent/ProductSlider.js";
import useTopRatedProducts from "./customHooks/useTopRatedProducts.js";


const TopRatedProduct = () => {
    const topRatedProducts = useTopRatedProducts();
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
        <div className="">{topRatedProducts ?
            <ProductSlider title={<Producttitle title={"Best Selling Products"} />} >
                {topRatedProducts?.map(product => {
                    return (<Productcard product={product} />)
                })}
            </ProductSlider> : <>No Data</>}
        </div>

    )
}

export default TopRatedProduct