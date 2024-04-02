import React from 'react'

const About = () => {
    return (
        <div>
            <div className='container flex flex-col justify-center items-center p-2'>
                <h2 className='text-[2rem]'>About <span className='text-orange-400 text-[2rem]'>Auto Meka</span></h2>
                <p className='text-gray-500 text[1rem]'>At Automeka, we're passionate about providing high-quality car parts and accessories to automotive enthusiasts and professionals alike. With years of experience in the industry, we understand the importance of reliable parts to keep your vehicle running smoothly.</p>

            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>Our Mission</h2>
                <p className='text-gray-500 text[1rem]'>Our mission at Automeka is to make the process of finding and purchasing car parts simple, convenient, and reliable. We aim to offer a wide selection of genuine OEM parts, aftermarket upgrades, and accessories to meet the diverse needs of our customers.</p>
                <h2 className='flex-start text-[1.5rem]'>Our Products</h2>
                <p className='text-gray-500 text[1rem]'><span className='font-bold'>Genuine OEM Parts:</span> We offer a wide range of genuine OEM parts sourced directly from reputable manufacturers.
                    <br />

                    <span className='font-bold'>Aftermarket Upgrades:</span> Enhance your vehicle's performance and aesthetics with our selection of aftermarket upgrades and accessories.
                    <br />

                    <span className='font-bold'>Maintenance Essentials:</span>  From oil filters to brake pads, we've got everything you need to keep your vehicle in top condition.</p>
            </div>
        </div>
    )
}

export default About