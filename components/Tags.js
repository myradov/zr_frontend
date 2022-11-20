import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Tags = ({title}) => {
  return (
    <Link href="#" className='relative basis-2/5 md:w-full h-8 m-1'>
        <li className='relative w-full h-full flex justify- items-center flex-nowrap border border-black rounded-md overflow-hidden bg-blue-100'>
            <div className='relative w-1/3'>
            <Image src="/z_cat4.jpg" layout="responsive" className='w-full object-cover' width={50} height={35}/>
            </div>
            <p className='relative w-2/3 text-center'>{title}</p>
        </li>
    </Link>
  )
}
