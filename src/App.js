
import './App.css';
import { BrowserRouter  as Router  , Routes ,Route } from 'react-router-dom';
import Home from './component/Home/Home.js';
import Layout from './component/Layout/Layout.js';


function App() {
  return (
    <div>
      <Router>
      <Layout>
        <Routes>
       
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Home/>}/>
     
        </Routes>
        </Layout>
      

      </Router>

   
    

      
      
      {/* <Footer/> */}
      {/* <Library/> */}

    </div>
  );
}

export default App;
