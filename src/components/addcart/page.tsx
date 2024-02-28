"use client"
import React from 'react'
import { Button } from '../ui/button'

function Addcart() {
    const handleclick = () => {
        alert('product added successfully')
    };
  return (
    <Button className='font-bold h-10 w-32 flex items-center justify-center  text-white bg-primary mt-2' onClick={handleclick}>
                  Add to Cart
                </Button>
  )
}

export default Addcart