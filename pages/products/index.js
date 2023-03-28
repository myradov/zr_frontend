import React from 'react'
import { Product } from '../../components/Product'

const index = ({products}) => {
  console.log(products)
  return (
    <section className='container p-2 max-w-screen-xl mx-auto'>
        <h1 className='relative py-5 text-2xl font-bold'>Our Products</h1>
        <ul className='relative grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>

          {
            products.data.map(product => (
              <Product product={product} key={product.id}/> 
            ))
          }
        </ul>
    </section>
  )
}

export default index

export async function getStaticProps(){
  const res = await fetch("http://localhost:8055/items/product?fields=id,banner.*,translations.*,old_price")
  const products = await res.json()
  
  if(!products){
    return { 
      notFound: true
    }
  }
  return {
    props:{
      products
    }
  }
}