import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdMenu } from "react-icons/md";


const Navbar = () => {
  return (
    <div className='w-full fixed p-2 z-40'>
        <nav className='flex justify-between items-center bg-white text-black w-full h-12 md:h-16 rounded-md shadow-md p-4'>
            <Link href="/" className='flex-none'>
                <Image src="/vercel.svg" width={100} height={100}/>
            </Link>
            <ul className='hidden md:flex w-2/4 justify-evenly items-center'>
                <li className='hover:text-main'>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Brands
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Categories
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Contacts
                    </Link>
                </li>
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