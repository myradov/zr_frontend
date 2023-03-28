import Image from 'next/image'
import React from 'react'

const contacts = () => {
  return (
    <section className='relative bg-white w-full h-auto max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:pt-5'>
      <div className='relative col-span-2 w-full h-48 md:h-80 aspect-video overflow-hidden'>
          <Image src="/contact.jpg" fill className='object-cover'/>
      </div>
      <div className='relative col-span-2 md:col-span-1 flex flex-col justify-center items-start p-2'>
        <h2 className='font-bold text-2xl border-b border-main'>Address</h2>
        <div className='flex flex-col gap-1'>
          <h3>Phone: +993-33-33-33</h3>
          <h3>Email: zerur@sanly.tm</h3>
          <h3>IG: @sanly.tm</h3>
        </div>
      </div>
      <div className='relative col-span-2 md:col-span-1 flex flex-col justify-center items-start p-2'>
        <h2 className='font-bold text-2xl border-b border-main'>Customer Support</h2>
        <div className='flex flex-col gap-1'>
          <h3>Phone: +993-33-33-33</h3>
          <h3>Email: zerur@sanly.tm</h3>
          <h3>IG: @sanly.tm</h3>
        </div>
      </div>
    </section>
  )
}

export default contacts