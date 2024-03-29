
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import FAQ from './component/Faq.js'


function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/category' element={<Category />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/myaccount/' element={<MyAccount />} />
            <Route path='/myaccount/orders' element={<Orderscreen />} />
            <Route path='/order' element={<SingleOrderscreen />} />
            <Route path='/ordertracker' element={<OrderTracker />} />
            <Route path='/addaddress' element={<AddAddress/>} />
            <Route path='/editprofile' element={<EditProfile/>}/>
            <Route path='/FAQs' element={<FAQ/>}/>
           
            

          </Routes>
        </Layout>


      </Router>






      {/* <Footer/> */}
      {/* <Library/> */}

    </div>
  );
}

export default App;
