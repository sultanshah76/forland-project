"use client"
import { Minus, Plus } from 'lucide-react'
import React ,{useEffect,useState} from 'react'

function Quantity() {
const [num,setnum]=useState(1)
  return (
    <div className='mt-14 flex font-bold gap-4 text-lg'>Quantity:       
    <p className='rounded-full hover:bg-primary items-center flex justify-center bg-gray-300 h-7 w-7 duration-500'onClick={()=>setnum(num<=1?1:num-1)}>
    <Minus /></p>
    <span>{num}</span>
      <p className='rounded-full hover:bg-primary items-center flex justify-center bg-gray-300 h-7 w-7 duration-500' 
      onClick={()=>setnum(num+1)}>
      <Plus /></p>
    </div>
  )
}

export default Quantity