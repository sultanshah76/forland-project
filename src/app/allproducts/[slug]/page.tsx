import React from 'react';
import { products } from '@/utils/constant';
import Image, { StaticImageData } from 'next/image';

const prdctsdetail = (id:string) => {
  return products.filter((product) => (product.id === id));
};
export default function Page({ params }: { params: { slug: string } }) {
  const result = prdctsdetail(params.slug);
  return(
   <div className='lg:flex justify-evenly flex-wrap gap-x-5 my-10'>
    {
  result.map((product) => (
<div key={product.id} className='flex justify-center items-center'>
        <Image src={product.image} alt={product.id}/>
<h1 className=' flex-wrap  mt-4'>{product.title}</h1>
<h2 className=' flex-wrap text-sm text-gray-500 font-extrabold  mt-1'>{product.catagorey}</h2>
<p className='font-bold  my-3'>${product.price}</p>
</div>
      ))
          }
  </div>)
}
