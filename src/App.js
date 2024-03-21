
import './App.css';
import Categories from './component/Categories.js';
import Headertop from './component/Headertop.js';
import HeroSlider from './component/HeroSlider.js';
import Navbar from './component/Navbar.js'
import TopRatedProduct from './component/TopRatedProduct.js';
import FeaturedProducts from './component/FeaturedProducts.js'
import Cashback from './component/Cashback/Cashback.js';
import ComingSoonProduct from './component/ComingSoonProduct.js';
import Brands from './component/Brands.js'


function App() {
  return (
    <div>

      <Headertop />
      <Navbar />
      <HeroSlider />
      <Categories />
      {/* <Cashback/> */}
      <FeaturedProducts/>
      <TopRatedProduct/>
      <ComingSoonProduct/>
      <Brands/>

    </div>
  );
}

export default App;
