import { ShoppingBag } from 'lucide-react'
import React from 'react'

function Cart
() {
  return (<main className='font-bold mt-10 mb-40'> 
  <div className=' text-3xl  mx-10'>Shopping Cart</div>
    <div className='flex justify-center items-center mt-28'>
        <ShoppingBag size={150}/>
    </div>
        <div className='text-center text-4xl mt-8'>Your shopping bag is empty</div>


    </main>
  )
}

export default Cart
