import React from 'react'
import Producttitle from '../wrapper/Producttitle.js'
import ComingsoonCard from './cards/ComingsoonCard.js'
import ProductSlider from './ScrollComponent/ProductSlider.js'
import useComingSoonProducts from './customHooks/useComingSoonProducts.js'
import Productcard from './cards/Productcard.js'
import { useNavigate } from 'react-router-dom/dist/index.js'

const ComingSoonProduct = () => {
    const navigate = useNavigate();
    const comingSoonProducts = useComingSoonProducts();
    return (
        <div>
            <div className=''><Producttitle title={"Coming Soon Products"} /></div>
            
            <ProductSlider>


{comingSoonProducts?.map(product => {
    return (<Productcard product={product} />)
})}
</ProductSlider>
<div className="  flex justify-center mt-2  items-center   text-[1rem]" >
<span className="font-poppins cursor-pointer  text-[1rem]" onClick={() => navigate("/category")}> View All</span>
</div>
                {/* <ProductSlider desktopItemCount={3}>
                    {
                        new Array(3).fill(0).map(ite => {
                            return <ComingsoonCard />
                        })
                    }
                </ProductSlider> */}


            </div>


        
    )
}

export default ComingSoonProduct