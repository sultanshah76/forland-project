import Mark from "/public/images/fis footer logo.svg";
import Image from "next/image";
import { APP_LINKS } from "@/utils/constant";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Search, ShoppingBag, ShoppingCart } from "lucide-react";
export default function Header() {
  return (
      <main className=" flex  justify-between items-center  p-8">
          <Link href="/">
            <Image className="" src={Mark.src} alt="logo"height={250} width={250} />
          </Link>
        <div className="flex gap-10 items-center ">
  {APP_LINKS.map((link) => (
    <Link key={link.name} href={link.href}>
      <p className="font-bold">{link.name}</p>
    </Link>
  ))}
</div>
<div className="relative hidden lg:block">
  <div className=" absolute top-0 right-0 h-full flex items-center pr-2"><Search /></div>
  <Input placeholder="Search products" className=" h-8 border-black w-80 from-neutral-700 font-bold"/>
  </div>
  <Link href={"/cart"}>
<div className="rounded-full w-12 h-12 bg-primary flex justify-center items-center relative">
  <div className=" absolute  top-1 right-2 rounded-full w-3 h-3 bg-red-500 flex justify-center items-center text-xs">0</div>
  <ShoppingCart color="white" /> 
  </div>
  </Link>
</main>
  )
  };