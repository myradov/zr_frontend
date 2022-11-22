import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import sam2 from '../public/sam2.jpg'

export const Banner = () => {
  return (
    <>
        <div className='relative group container col-span-1 h-48 md:h-96 rounded-lg overflow-hidden bg-gray-600 hover:bg-gray-500 transition delay-75 duration-150 ease-in-out'>
            <Link href='/' className='block relative w-full h-full relative'>
                <Image src={sam2} fill objectFit="cover" className='object-cover  mix-blend-overlay'/>
                <h2 className='absolute left-4 md:left-10 bottom-4 text-base md:bottom-10 w-2/3 md:text-2xl font-bold text-white'>New Samsung Galaxy S22 Ultra</h2>
                <p className='absolute top-3 md:top-10 right-3 md:right-20 px-4 py-2 bg-white shadow-xl font-bold text-xs text-center md:text-sm rounded-2xl group-hover:bg-gray-100'>Buy now</p>
            </Link>
        </div>
    </>
  )
}
