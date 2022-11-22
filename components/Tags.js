import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const myLoader = ({ src }) => {
    return `/${src}}`
}

export const Tags = ({title, image}) => {
  return (
    <Link href="#" className='relative col-span-1 h-10 md:h-16'>
        <li className='relative w-full h-full flex items-center flex-nowrap border border-gray-300 hover:border-main rounded-md overflow-hidden bg-white'>
            <div className='relative w-1/3'>
            <Image src='/z_cat1.jpg' className='w-full h-auto object-cover object-top' width={500} height={350}/>
            </div>
            <p className='relative w-2/3 text-center text-xs md:text-base font-bold'>{title}</p>
        </li>
    </Link>
  )
}
