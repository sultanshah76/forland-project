import Link from "next/link";
import Image from "next/image";
import React from "react";
import Mark from '/public/images/fis footer logo.svg';
import { Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <main>
      <div className='lg:flex grid bg-blue-300 justify-around items-center pt-5 pb-36'>
        <div className="">
            <Link href="/" className="mb-10 text-sm ">
              <Image className="h-auto w-60" src={Mark} alt="logo" height={100} width={100} />
            </Link>
          
            <div className="my-6">Small, artisan label that offers a thoughtfully <br />curated collection of high quality everyday <br /> essentials made.</div>
            <div className="flex gap-5 pt-6"><div className="rounded-xl w-12 h-12 bg-primary flex justify-center items-center"><Twitter /></div> <div className="rounded-xl w-12 h-12 bg-primary flex justify-center items-center"><Instagram/> </div> <div className="rounded-xl w-12 h-12 bg-primary flex justify-center items-center"><Linkedin /></div>
          </div>
        </div>

          <ul className="">
            <div className="font-bold text-2xl  py-7">Company</div>
            <li className="pb-3">24h Service</li>
            <li className="pb-3">Privacy Policy</li>
            <li className="pb-3">About</li>
            <li className="pb-3">How it Works</li>
            <li className="pb-3">Contact Us</li>
          </ul>
          <ul className="">
            <div className="font-bold text-2xl pb-7">Support</div>
            <li className="pb-3">Support Career</li>
            <li className="pb-3">24h Service</li>
            <li className="pb-3">Quick Chat</li>
          </ul>
          <ul className="">
            <div className="font-bold text-2xl  pb-7">Contact</div>
            <li className="pb-3">Whatsapp</li>
            <li className="pb-3">Support 24h</li>
          </ul>
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
