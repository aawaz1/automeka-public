
import './App.css';
import Headertop from './component/Headertop.js';
import HeroSlider from './component/HeroSlider.js';
import Navbar from './component/Navbar.js'
import Sectiontitle from './wrapper/Sectiontitle.js';

function App() {
  return (
    <div>
     
      <Headertop/>
      <Navbar/>
      <HeroSlider/>
      <Sectiontitle/>
    
    </div>
  );
}

export default App;
