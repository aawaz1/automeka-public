import React from 'react'
import useScrollTop from './customHooks/useScrollToTop'

const Privacypolicy = () => {
    useScrollTop()
    return (
        <div>
            <div className='container flex flex-col justify-center items-center p-2'>
                <h2 className='text-[2rem]'>Privacy <span className='text-customOrange text-[2rem]'>Policy</span></h2>
                <p>At Automeka, we are committed to protecting your privacy and ensuring the security of your personal information. Our Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our website or services. By accessing or using our services, you agree to the terms of this Privacy Policy.</p>


            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>Information We Collect:</h2>
                <p className='text-gray-500 text[1rem]'>Personal Information: We may collect personal information such as your name, email address, phone number, and shipping address when you place an order or create an account on our website.
                    Browsing Information: We automatically collect certain information about your device and browsing activity, including your IP address, browser type, and pages visited on our website.
                    Cookies: We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic</p>
            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>How We Use Your Information:</h2>
                <p className='text-gray-500 text[1rem]'>Order Processing: We use your personal information to process and fulfill your orders, communicate with you about your purchases, and provide customer support.
                    Marketing: With your consent, we may send you promotional emails about our products, special offers, and promotions.
                    Analytics: We use browsing information and cookies to analyze website traffic, improve our website and services, and personalize your experience.</p>
            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>Sharing Your Information:</h2>
                <p className='text-gray-500 text[1rem]'>We may share your information with third-party service providers who assist us in operating our website, processing payments, or delivering products to you.
                    We may also share your information as required by law or to protect our rights, property, or safety, or that of others.</p>
            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>Data Security:</h2>
                <p className='text-gray-500 text[1rem]'>We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
            </div>
            <div className='container flex-start'>
                <h2 className='flex-start text-[1.5rem]'>Updates to this Privacy Policy:</h2>
                <p className='text-gray-500 text[1rem]'>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Privacy Policy on our website.</p>
            </div>
        </div>
    )
}

export default Privacypolicy