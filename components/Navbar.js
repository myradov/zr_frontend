import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdMenu } from "react-icons/md";


const Navbar = () => {
  return (
    <div className='w-full relative z-40'>
        <nav className='flex justify-between items-center bg-white text-black w-full h-12 md:h-16 p-4 border-b border-gray-200'>
            <Link href="/" className='flex justify-center items-center w-12 md:w-16 h-auto'>
                <Image src="/zerur_logo.png" width={400} height={360} className="w-full h-auto"/>
            </Link>
            <ul className='hidden md:flex w-2/4 justify-evenly items-center'>
                <Link href="/" className='text-gray-500 border-b border-gray-200 bg-white hover:border-gray-400 hover:text-main p-5 transition-all duraiton-450 ease'>
                    <li>Home</li>
                </Link>
                <Link href="/products" className='text-gray-500 border-b border-gray-200 bg-white hover:border-gray-400 hover:text-main p-5 transition-all duraiton-450 ease'>
                    <li>Products</li>
                </Link>
                <Link href="/categories" className='text-gray-500 border-b border-gray-200 bg-white hover:border-gray-400 hover:text-main p-5 transition-all duraiton-450 ease'>
                    <li>Categories</li>
                </Link>
                <Link href="/brands" className='text-gray-500 border-b border-gray-200 bg-white hover:border-gray-400 hover:text-main p-5 transition-all duraiton-450 ease'>
                    <li>Brands</li>
                </Link>
                <Link href="/contacts" className='text-gray-500 border-b border-gray-200 bg-white hover:border-gray-400 hover:text-main p-5 transition-all duraiton-450 ease'>
                    <li>Contacts</li>
                </Link>
            </ul>
            <ul className='hidden md:flex w-12 justify-between items-center'>
                <li>
                    <Link href='/'>TM</Link>
                </li>
                <li>
                    <Link href='/'>RU</Link>
                </li>
            </ul>
            <div className='relative md:hidden cursor-pointer' onClick={() => alert('hello')}>
                <MdMenu size='1.8rem'/>
            </div>
        </nav>
    </div>
   
  )
}

export default Navbar
