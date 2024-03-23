import React from 'react'
import CartMenu from '../component/cartmenu.js'

const Container = ({ isOpen , handleIsOpen}) => {
    return (
        <>
            {
                isOpen && (<div style={{zIndex :100  ,right : isOpen ? 0 : '-144vw'}} className={`fixed top-0  w-[17rem] h-[100vh] bg-white`}><CartMenu handleIsOpen={handleIsOpen}/></div>)
            }
            {
                isOpen  && (<div onClick={handleIsOpen} style={{zIndex :99}} className='fixed w-[100vw] h-[100vh] top-0 left-0 bg-gray-100  opacity-[0.5]'></div>)
            }
        </>

    )
}

export default Container