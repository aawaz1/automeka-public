
import './App.css';
import { BrowserRouter  as Router  , Routes ,Route } from 'react-router-dom';
import Home from './component/Home/Home.js';
import Layout from './component/Layout/Layout.js';
import Wishlist from './component/wishlist.js';
import Checkout from './component/Checkout.js';
import Category from './component/Category.js';


function App() {
  return (
    <div>
      <Router>
      <Layout>
        <Routes>
       
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Home/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/category' element={<Category/>}/>
     
        </Routes>
        </Layout>
      

      </Router>

   
    

      
      
      {/* <Footer/> */}
      {/* <Library/> */}

    </div>
  );
}

export default App;
