import React from 'react';
import Cards from '@/components/Imgcards/page';
import { products } from '@/utils/constant';
import { StaticImageData } from 'next/image';

const filterprdcts = (catagorey: string) => {
  return products.filter((product) => (product.catagorey === catagorey));
};
export default function Page({ params }: { params: { id: string } }) {
  const result = filterprdcts(params.id);
  return <div className='lg:flex justify-evenly flex-wrap gap-x-5 my-10'>
    {
    result.length > 0 ? (
      result.map((product) => (
        <Cards key={product.id} title={product.title} price={product.price} image={product.image as StaticImageData} catagorey={product.catagorey} id={product.id}/>
      ))
    ) : (
      <p className='flex justify-center items-center text-center capitalize font-bold text-2xl'>No products available there is a technical error right now please come back later</p>)
    }
  </div>
}
