import React from 'react'
import Producttitle from '../wrapper/Producttitle.js'
import ComingsoonCard from './cards/ComingsoonCard.js'
import ProductSlider from './ScrollComponent/ProductSlider.js'

const ComingSoonProduct = () => {
    return (
        <div>
            <div className=''><Producttitle title={"Coming Soon Products"} /></div>
            <div style={{ backgroundImage: "url('/abstract-white-background-with-squares 1.png')" }} className=' p-6 flex flex-col justify-center'>
                <ProductSlider desktopItemCount={3}>
                    {
                        new Array(3).fill(0).map(ite => {
                            return <ComingsoonCard />
                        })
                    }
                </ProductSlider>
                {/* <ProductSlider desktopItemCount={3}>
                    {
                        new Array(3).fill(0).map(ite => {
                            return <ComingsoonCard />
                        })
                    }
                </ProductSlider> */}


            </div>


        </div>
    )
}

export default ComingSoonProduct