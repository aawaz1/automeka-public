import React, { Children } from 'react'
import Headertop from '../Headertop'
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollToTop from '../Scrolltotop.js'

const Layout = ({children}) => {
  return (
    <div>
        {/* <Headertop/> */}
        <Navbar/>
        {
            children
        }
        <Footer/>
     
    </div>
  )
}

export default Layout