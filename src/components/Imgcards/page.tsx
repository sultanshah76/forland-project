import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cards(props:{title:string,price:number,image:string|StaticImageData,catagorey:string,id:string}) {
  return (<Link href={`/allproducts/${props.id}`}>
    <div className=' gap-x-5 transition duration-300 ease-linear transform hover:scale-105'>
                      <Image src={props.image} alt='image' height={300} width={300} className=' rounded-xl border-black'/>
                      <div className='text-center'>
<p className=' flex-wrap  mt-4'>{props.title}</p>
<p className=' flex-wrap text-sm text-gray-500 font-extrabold  mt-1'>{props.catagorey}</p>
<p className='font-bold  my-3'>${props.price}</p>
</div>  
    </div>
    </Link>
  )
}

export default Cards
