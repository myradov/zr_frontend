import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Tags = ({title}) => {
  return (
    <Link href="#" className='relative col-span-1 h-12'>
        <li className='relative w-full h-full flex justify- items-center flex-nowrap border border-gray-300 hover:border-main rounded-md overflow-hidden bg-blue-100'>
            <div className='relative w-1/3'>
            <Image src="/z_cat4.jpg"  className='w-full object-cover' width={600} height={400}/>
            </div>
            <p className='relative w-2/3 text-center'>{title}</p>
        </li>
    </Link>
  )
}
