import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";



const Headertop = () => {
   
    return (
        <div className=''>
            <div className=' pt-2 pb-2  container flex items-center'>
                <div className=""><RxDividerVertical style={{ fontSize: "1.6rem" }} /></div>  <div>Download App</div> <div className="ml-2"><FaApple /></div> <div className="ml-2"><IoLogoAndroid /></div>

            </div>
            <hr style={{ margin: 0 }} className=' border border-solid border-gray-100' />
            

        </div>

    )
}

export default Headertop