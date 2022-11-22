import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Product = () => {
  return (
    <Link href='/' className='col-span-1 group transition-all ease-in-out duration-150 overflow-hidden rounded-sm hover:shadow-xl'>
        <li>
        <Image src="/sam3.jpg" width={500} height={400} className="w-full h-auto aspect-square object-cover"/>
        <div className='relative p-2 flex flex-col justify-start items-start'>
            <h2 className='text-md md:text-lg font-medium transition ease-in-out delay-350 group-hover:text-main hover:underline'>Iphone 14 Pro</h2>
            <p className='text-xs md:text-sm py-2'>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, saepe.</p>
            <p className='font-light text-sm md:text-base text-black group-hover:text-main transition-all delay-450'>19500 Manat</p>
        </div>
        </li>
    </Link>
  )
}
