import React from 'react';
import Cards from '@/components/Imgcards/page';
import { products } from '@/utils/constant';
import { StaticImageData } from 'next/image';

function All_products() {
  return (
    <div className='lg:flex justify-evenly flex-wrap gap-x-5 my-10'> 
      {products.length < 10000 ? (
        products.map((product) => (
          <Cards key={product.id} id={product.id} title={product.title} price={product.price} image={product.image as StaticImageData} catagorey={product.catagorey} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default All_products;

