// 'use client'
import Link from "next/link";
import WhatsAppButton from "../../whatsapp button/page";
import { ShoppingCart } from "lucide-react";
import mark from "/public/images/male-hero.png"
import Image from "next/image";
import PNG from "/public/images/Featured1.webp";
import PNG1 from "/public/images/Featured2.webp";
import PNG2 from "/public/images/Featured3.webp";
import PNG3 from "/public/images/Featured4.webp";
import { Button } from "../../ui/button";

const Hero = () => {

  return (
    <>
      <section className="flex mt-10 mb-20 flex-col lg:flex-row ">
        <div className="flex-1">
            <button className="pt-16 pb-14">
              <Link href="./contact-us" className=" bg-blue-200 h-10 w-28 font-semibold  text-blue-700  rounded-lg flex items-center justify-center ">Sale 80%</Link>
            </button>
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
              Custom Sportswear Manufacturer From Sialkot Pakistan
            </h1>
            <p className="mb-8   pt-5 pb-3 text-base text-body-color dark:text-dark-6">
              Empowering athletes everywhere, forland industrial sports
              delivers innovative and stylish sportswear designed to elevate
              performance and inspire greatness.
            </p>
            <Link href="./products" >
              <Button  className=" text-lg bg-primary h-16 w-52 font-bold text-white flex items-center justify-center">
                <ShoppingCart color="white" /> Start Shopping
              </Button>
            </Link>
            <div className=" flex item-center  justify-evenly mt-20 gap-4">
            <Image src={PNG} 
         alt="Image"
         width={100}
         height={40}
         className=" "/>
          <Image src={PNG1} 
         alt="Image"
         width={100}
         height={40}
         className=" "/>
          <Image src={PNG2} 
         alt="Image"
         width={100}
         height={40}
         className=" "/>
          <Image src={PNG3} 
         alt="Image"
         width={100}
         height={40}
         className=" "/>
         </div>
            </div>
            <div className="flex-1">
        
            <div className="flex aria-hidden: justify-center items-center mt-10">
         <Image src={mark} 
         alt="Image"
         width={350}
         height={400}
         className=""/>
         </div>
         </div>
         </section>
      <div><WhatsAppButton /></div>
    </>
  );
};

export default Hero;
