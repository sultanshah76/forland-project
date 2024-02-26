import React from 'react';
import hoodie from "/public/images/bag.png";
import boxers from "/public/images/sweatshirt.png";
import jac from "/public/images/jacket.png";
import Image from 'next/image';
function Promotion() {
    return (
        <section className='font-serif lg:flex gap-3  items-center lg:border-2 rounded-lg  hover:bg-blue-100/70 transition duration-300 ease-in-out '>
            <div className='flex-1 '>
                <p className='text-blue-700 text-sm font-extrabold flex justify-center items-center pt-10'>PROMOTIONS</p>
                <p className="text-4xl font-extrabold tracking-tight flex justify-center pt-5 pb-12">
                    Our Promotions
                </p>
            </div>

            <div className=' lg:flex gap-4 flex-1'>
            
                    <div className=' bg-gray-300 my-3 font-thin tracking-tight  text-slate-700'>Green jacket
                        <div className='flex gap-2 items-baseline'><div className='flex  line-through'>$300.00</div><div className='font-semibold text-lg'>$270.00</div></div>
                        <div className='flex justify-center '>
                            <Image src={jac.src}
                                alt="Image"
                                width={340}
                                height={340}
                                className="transition duration-300 ease-linear transform hover:scale-110" />
                        </div>
                    </div>
                    <div className='bg-blue-200 my-3 font-thin  text-gray-700'>Blue hoodie
                        <div className='flex gap-2 items-baseline'><div className='flex  line-through'>$225.00</div><div className='font-semibold text-lg'>$190.00</div></div>
                        <div className='flex justify-center  '>
                            <Image src={hoodie.src}
                                alt="Image"
                                width={340}
                                height={340}
                                className="transition duration-300 ease-linear transform hover:scale-110 " />
                        </div>
                    </div>
            
                    <div className=' bg-gray-300 my-3 font-thin tracking-tight  text-slate-700'>Yellow sweat-shirt
                        <div className='flex gap-2 items-baseline'><div className='flex  line-through'>$100.00</div><div className='font-semibold text-lg'>$75.00</div></div>
                        <div className='flex justify-center '>
                            <Image src={boxers.src}
                                alt="Image"
                                width={340}
                                height={340}
                                className=" transition duration-300 ease-linear transform hover:scale-110" />
                        </div>
                    </div>
                    
            </div>
        </section>
    );
}

export default Promotion;
