import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <main className='relative w-full h-auto'>{children}</main>
        <Footer />
    </>
  )
}

export default Layout


