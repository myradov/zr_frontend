import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Brands = ({brands}) => {
  return (
    <section className='relative w-full h-auto max-w-screen-lg mx-auto bg-white'>
      <div className='grid grid-cols-2 p-2 md:grid-cols-4 gap-2'>
        {
          brands.data.map(brand => (
            <Link href='/' className="relative block aspect-video overflow-hidden object-center border border-2 border-slate-50 rounded-lg hover:border-slate-300 duration-100">
              <Image src={`http://localhost:8055/assets/${brand.banner}`} fill className='object-contain scale-90 hover:scale-95 duration-100'/>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default Brands


export async function getStaticProps(){
  const res = await fetch("http://localhost:8055/items/brand?fields=id,title,banner,product.*")
  const brands = await res.json()

  return {
    props:{
      brands
    }
  }
}