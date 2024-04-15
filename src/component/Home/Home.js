import Categories from '../Categories.js';
import Headertop from '../Headertop.js';
import HeroSlider from '../HeroSlider.js';
import Navbar from '../Navbar.js';
import TopRatedProduct from '../TopRatedProduct.js';
import FeaturedProducts from '../FeaturedProducts.js';
import Cashback from '../Cashback/Cashback.js';
import ComingSoonProduct from '../ComingSoonProduct.js';
import Brands from '../Brands.js';
import Footer from '../Footer.js';
import Endrosement from '../Endrosement.js';




const Home = () => {
    return (
        <div>
            <HeroSlider />
            <div className='container'>
                <Categories />
                {/* <Cashback /> */}
                <FeaturedProducts />
                <TopRatedProduct />
                <ComingSoonProduct />
                <Brands />
                <Endrosement />
            </div>
        </div>
    )
}

export default Home