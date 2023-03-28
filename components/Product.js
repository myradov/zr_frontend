import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Product = ({product}) => {
  const router = useRouter()
  const { locale } = router

  const p = locale === 'en' ? product.translations[0] : locale === 'ru' ? product.translations[1] : locale === 'tm' ? product.translations[2]: ''
  return (
    <Link href={`products/${product.id}`} className='col-span-1 group transition-all ease-in-out duration-150 overflow-hidden rounded-lg hover:shadow-2xl'>
        <li>
        <Image src="/sam2.jpg" alt={p.title} width={500} height={400} className="w-full h-auto aspect-square object-cover"/>
        <div className='relative px-4 py-2 flex flex-col justify-start items-start'>
            <h2 className='text-md md:text-lg font-medium transition ease-in-out delay-350 group-hover:text-main hover:underline'>{p.title}o</h2>
            <div className='text-xs md:text-sm py-2 h-32 truncate'dangerouslySetInnerHTML={{__html: p.description}}></div>
            <h2 className='font-light text-sm md:text-base text-black uppercase'>{product.old_price}</h2>
        </div>
        </li>
    </Link>
  )
}
