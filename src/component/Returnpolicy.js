import React from 'react'

const Returnpolicy = () => {
    return (
        <div>
            <div className='container flex flex-col justify-center items-center p-2'>
                <h2 className='text-[2rem]'>Return <span className='text-customOrange text-[2rem]'>Policy</span></h2>
                <p>At Automeka, we want you to be completely satisfied with your purchase. If you are not satisfied with your purchase for any reason, you may return it within [number of days] days of receipt for a refund or exchange, subject to the following conditions:</p>


            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>Items Eligible for Return:</h2>
                <p className='text-gray-500 text[1rem]'>You may return new, unused items in their original packaging for a refund or exchange.
Some items, such as custom-made or special-order items, may not be eligible for return.</p>
            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>Return Process:</h2>
                <p className='text-gray-500 text[1rem]'>To initiate a return, please contact our customer service team to obtain a return authorization (RA) number.
Include the RA number with your returned item, along with a copy of your original receipt or proof of purchase.
Return shipping costs are the responsibility of the customer, unless the return is due to our error or a defective product..</p>
            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>Refunds:</h2>
                <p className='text-gray-500 text[1rem]'>Refunds will be issued to the original payment method used for the purchase.
Refunds are typically processed within [number of days] days of receiving the returned item..</p>
            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>Exchanges:</h2>
                <p className='text-gray-500 text[1rem]'>If you would like to exchange an item for a different size, color, or model, please contact our customer service team to arrange an exchange.</p>
            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>Damaged or Defective Items:</h2>
                <p className='text-gray-500 text[1rem]'>If you receive a damaged or defective item, please contact our customer service team immediately for assistance.</p>
            </div>
        </div>
    )
}

export default Returnpolicy