import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <main className='relative container max-w-screen-2xl mx-auto bg-gray-100'>{children}</main>
        {/* <Footer /> */}
    </>
  )
}

export default Layout


