import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';



// Import Swiper React components
import { SwiperSlide } from 'swiper/react';
import "swiper/css";

export const Category = ({category}) => {
  console.log(category)
  const { locale } = useRouter()
  const c = locale === 'en' ? category.translations[0] : locale === 'ru' ? category.translations[1] : locale === 'tm' ? category.translations[2]: ''
  return (
    <SwiperSlide className="w-42">
      <Link href="#" className='relative w-42 h-10 md:h-16'>
        <li className='relative w-full h-full flex items-center flex-nowrap rounded-lg overflow-hidden bg-gray-200 hover:bg-white transition delay-50 duration-200 ease-in' >
            <div className='relative w-32 h-24'>
              <Image src={`http://localhost:8055/assets/${category.banner}`} fill className='object-cover'/>
            </div>
            <p className='relative w-full text-center text-xs md:text-base font-bold p-2'>{c.title}</p>
        </li>
      </Link>
    </SwiperSlide>
  )
}
