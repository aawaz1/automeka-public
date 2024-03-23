import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import SearchBox from './items/SearchBox.js';
import { GrCart } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { RiAccountBoxLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import './top.css'
import { useState } from "react";
import Container from './Container.js';


const Headertop = () => {
    const [isOpen ,setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className=''>
            <div className='   header  flex items-center g-12 pt-2 pb-2 pl-40'>
                <div className="ml-2"><RxDividerVertical style={{ fontSize: "1.6rem" }} /></div>  <div>Download App</div> <div className="ml-2"><FaApple /></div> <div className="ml-2"><IoLogoAndroid /></div>

            </div>
            <hr className=' border border-solid border-gray-100' />
            <div className=" header1 flex items-center justify-between pt-2 pb-2 pl-40">
                <div className="mb-2"><img style={{width :"5rem"}} src='/auto_meka_logo_small.webp' /></div>
                <div className=""><SearchBox /></div>
                <div className="flex  pr-20 mb-2">
                    <button className="mr-4"><RiAccountBoxLine style={{ fontSize: "1.2rem" }} /></button>
                    <button onClick={handleIsOpen} className="mr-4"><GrCart style={{ fontSize: "1.2rem" }} /></button>
                    <button className="mr-4"><CiHeart style={{ fontSize: "1.2rem" }} /></button>
                </div>
            </div>
    
                  <Container isOpen={isOpen} handleIsOpen={handleIsOpen}/>  
        
        </div>
       
    )
}

export default Headertop