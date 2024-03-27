
import './App.css';
import { BrowserRouter  as Router  , Routes ,Route } from 'react-router-dom';
import Home from './component/Home/Home.js';
import Layout from './component/Layout/Layout.js';
import Wishlist from './component/wishlist.js';
import Checkout from './component/Checkout.js';
import Category from './component/Category.js';
import LoginForm from './component/Loginform.js';
import RegisterForm from './component/Registerform.js';
import ProductScreen from './component/ProductScreen.js';


function App() {
  return (
    <div>
      <Router>
      <Layout>
        <Routes>
       
    <Route path='/' element={<Home/>}/>
    
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/register' element={<RegisterForm/>}/>
    <Route path='/product' element={<ProductScreen/>}/>
     
        </Routes>
        </Layout>
      

      </Router>

   
    

      
      
      {/* <Footer/> */}
      {/* <Library/> */}

    </div>
  );
}

export default App;
