import React from 'react';
import { products } from '@/utils/constant';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Quantity from '@/components/Quantity/page';
import Addcart from '@/components/addcart/page';

const prdctsdetail = (id: string) => {
  return products.filter((product) => (product.id === id));
};
export default function Page({ params }: { params: { slug: string } }) {
  const result = prdctsdetail(params.slug);

  return (
    <div className='lg:flex flex-wrap mt-16 mb-32'>
      {
        result.map((product) => (
          
          <div key={product.id} className='flex justify-center gap-10'>
                        <Image src={product.image} alt={product.id} className='h-32 w-32' />

            <div>
              <Image src={product.image} alt={product.id} />
            </div>
            <div className='mt-24'>
              <h1 className='text-2xl'>{product.title}</h1>
              <h2 className='text-lg text-gray-300 font-bold'>{product.catagorey}</h2>
              <p className='mt-10 '> SELECT SIZE</p>
              <div className='font-extrabold flex gap-x-8 mt-3'>
                <p className='rounded-full hover:bg-primary items-center flex justify-center bg-gray-300 h-7 w-7 duration-500'>S</p>
                <p className='rounded-full hover:bg-primary items-center flex justify-center bg-gray-300 h-7 w-7 duration-500'>M</p>
                <p className='rounded-full hover:bg-primary items-center flex justify-center bg-gray-300 h-7 w-7 duration-500'>Lg</p>
                <p className='rounded-full hover:bg-primary items-center flex justify-center bg-gray-300 h-7 w-7 duration-500'>XL</p>
              </div>
             <Quantity/>
              <div className='flex  mt-7 gap-x-5 items-baseline justify-center  text-xl font-bold'>
                <Addcart/>
              <div>
              {/* "use client";
export default function OnclickBUTTON() {
    
    return (<div> <button className="bg-yellow-500" >ONCLICK</button>
        
    {`on click web event react hooks button
    to make it client component always "use client" on the top of the file.`}
    </div>
    );
  } */}
  
              ${product.price}.00
              </div>
              </div>


            </div>
          </div>
        ))
      }
    </div>)
}
