import React from 'react'
import { products } from '@/utils/constant'
import Cards from '@/components/Imgcards/page'
import { StaticImageData } from 'next/image'
function Hotproducts() {
  const productchunks=products.splice(0, 3)
  return (
            <main className='mb-28 flex-1'>
            
                <div className='text-blue-700 text-sm font-extrabold flex justify-center pt-10'>PRODUCTS</div>
                <div className="text-4xl font-extrabold tracking-tight  flex justify-center pt-5 pb-12">Check What We Have</div>
            <div className='lg:flex justify-evenly mt-5 '>
              
            {productchunks.map((product)=>(
              <Cards key={product.id} id={product.id} title={product.title} price={product.price} image={product.image as StaticImageData} catagorey={product.catagorey} />
            ))
            
            
            }
            
            </div>
            
        </main>
  )
}

export default Hotproducts