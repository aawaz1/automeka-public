
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.js';
import Layout from './component/Layout/Layout.js';
import Wishlist from './component/wishlist.js';
import Checkout from './component/Checkout.js';
import Category from './component/Category.js';
import LoginForm from './component/Loginform.js';
import RegisterForm from './component/Registerform.js';
import ProductScreen from './component/ProductScreen.js';
import MyAccount from './component/MyAccount.js';
import Orderscreen from './component/Orderscreen.js';
import SingleOrderscreen from './component/SingleOrderScreen.js';
import OrderTracker from './component/OrderTracker.js';
import AddAddress from './component/AddAddress.js';
import EditProfile from './component/Editprofile.js'
import Cart from './component/Cart.js';
import FAQ from './component/Faq.js';
import EditAddress from './component/EditAddress.js';
import About from './component/About.js'
import Contactus from './component/Contactus.js';
import NotFound from './component/Notfound.js'
import PrivateRoute from './component/routes/PrivateRoute.js';


function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout'  element={<PrivateRoute element={<Checkout />} />}/>
            <Route path='/category' element={<Category />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/myaccount/'  element={<PrivateRoute element={<MyAccount />} />}/>
            <Route path='/myaccount/orders'  element={<PrivateRoute element={<Orderscreen />} />}/>
            <Route path='/order'  element={<PrivateRoute element={<SingleOrderscreen />} />}/>
            <Route path='/ordertracker'  element={<PrivateRoute element={<OrderTracker />} />}/>
            <Route path='/addaddress'  element={<PrivateRoute element={<AddAddress />} />}/>
            <Route path='/editaddress/:id' element={<PrivateRoute element={<EditAddress />} />}/>
            <Route path='/editprofile'  element={<PrivateRoute element={<EditProfile />} />}/>
            <Route path='/FAQs' element={<FAQ />} />
            <Route path='/about' element={<About />} />
            <Route path='/Contact%20Us' element={<Contactus/>}/>
            <Route path='*' element={<NotFound/>}/>




          </Routes>
        </Layout>


      </Router>






      {/* <Footer/> */}
      {/* <Library/> */}

    </div>
  );
}

export default App;
