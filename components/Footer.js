import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 bg-main'>
        <ul className='flex'>
            <li>
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
        </ul>
    </footer>
  )
}

export default Footer
