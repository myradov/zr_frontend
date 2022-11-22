import React from 'react'
import { Product } from '../../components/Product'

const index = () => {
  return (
    <section className='container p-2 max-w-screen-xl mx-auto'>
        <h1 className='relative py-5 text-2xl font-bold'>Our Products</h1>
        <ul className='relative grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </ul>
    </section>
  )
}

export default index