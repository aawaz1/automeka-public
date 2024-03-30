import React, { Children } from 'react'
import Headertop from '../Headertop'
import Navbar from '../Navbar';
import Footer from '../Footer';

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