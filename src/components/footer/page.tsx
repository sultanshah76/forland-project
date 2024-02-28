import Link from "next/link";
import Image from "next/image";
import React from "react";
import Mark from '/public/images/fis footer logo.svg';
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";

function Footer() {
  return (
    <main>
      <div className='lg:flex bg-blue-300 justify-around items-center pt-5 pb-28'>
        <div className="">
          <Link href="/" className="mb-10 text-s ">
            <Image className="h-auto w-60" src={Mark} alt="logo" height={100} width={100} />
          </Link>
          <span className="my-6">Small, artisan label that offers a thoughtfully <br />
            curated collection of high quality everyday <br />
            essentials made.</span>
          <div className="flex gap-5 pt-6">
            <Link className="rounded-xl w-12 h-12 bg-primary flex justify-center items-center" href={"#"}><Twitter /></Link>
            <Link className="rounded-xl w-12 h-12 bg-primary flex justify-center items-center" href={"#"}><Instagram /> </Link>
            <Link className="rounded-xl w-12 h-12 bg-primary flex justify-center items-center" href={"#"}><Linkedin /></Link>
          </div>
        </div>
        <div className="flex gap-x-28">
          <span  className="gap-y-5">
            <div className="font-bold text-2xl my-7">Company</div>
            <li >24h Service</li>
            <li >Privacy Policy</li>
            <li >About</li>
            <li >How it Works</li>
            <li>Contact Us</li>
          </span>
          <span className="gap-y-5">
            <div className="font-bold text-2xl my-7">Support</div>
            <li>Support Career</li>
            <li >24h Service</li>
            <li>Quick Chat</li>
          </span>
          <span className="gap-y-5">
            <div className="font-bold text-2xl my-7">Contact</div>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </span>
        </div>
      </div>









      <div className='flex flex-1 justify-evenly h-14  items-center gap-10 border-black border-t-2'>
        <div className="flex-1">Copyright © 2024 Forland Industrial Sports</div>
        <div className="flex-1">Design by.<p className="font-bold"> Syed Muhammad Sultan</p></div>
        <div className="flex-1">Code by.<p className="font-bold"> sultanshah76 on github</p></div>
      </div>
    </main>
  );
}

export default Footer;
