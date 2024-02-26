import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


function Newsletter2() {
  return (<main className='my-56 gap-7 grid justify-center items-center text-center'>    
    <div className="text-4xl font-extrabold tracking-tight  ">Subscribe Our Newsletter</div>
    <div className=' text-sm '>Get the latest information and promo offers directly</div>
    <div className="flex w-full max-w-sm  space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
   
   </main>
 )
}

export default Newsletter2 