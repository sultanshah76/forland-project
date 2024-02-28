import Image from 'next/image';
import Link from 'next/link';
import family from '/public/images/family2.png'; // Adjust the image import path
import { Button } from '../../ui/button';

function Newsletter() {
  return (
    <main className='hidden lg:block px-2 transition duration-1000 ease-in-out transform hover:scale-90'>
          <div className=' flex justify-center items-center text-4xl font-extrabold  tracking-wide py-14'>SPORTS WEAR DESIGN FOR EXCELLENCE
            
          </div>
          <div className='flex gap-[200px] '>
              <Image src={family} alt='image' className='rounded-2xl bg-gray-200 w-[400px] h-[500px]' />
          <div className='flex gap-24 flex-1'>
            
            <div className='   font-serif tracking text-lg'>
              <div className=' grid  gap-5 flex-1'>
          <div className=' text-2xl font-bold tracking-tight'>
            Using Good Quality Materials
            <p className=' font-thin text-base'>
            Using good quality materials ensures durability and longevity in construction projects.
High-grade materials enhance performance and elevate the overall aesthetic appeal of products.
            </p>
          </div>
          <div className=' text-2xl font-bold tracking-tight'>
            Modern Fashion Design
            <p className='font-thin text-base'>
            Modern fashion design is characterized by its dynamic and ever-evolving nature, reflecting contemporary trends and cultural influences.
             It embraces innovation in materials,techniques, and styles, pushing boundaries and redefining conventional notions of style and beauty
          . </p>
          </div>
          <div className=' text-2xl font-bold tracking-tight'>
            Discount for Bulk Orders
            <p className=' font-thin text-base'>
            Businesses often offer discounts for bulk orders as an incentive for customers to purchase larger quantities of their products or services.
These discounts can help businesses increase sales volume while providing customers with cost savings for buying in bulk.            </p>
          </div>
          <div className=' text-2xl font-bold tracking-tight'>
            100% Handmade Products
            <p className=' font-thin text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
              <Link href='/allproducts'>
                <Button className='transition duration-300 ease-in-out transform hover:scale-110 font-bold h-16 w-52 flex items-center justify-center rounded-2xl text-white bg-primary mt-2'>
                  ORDER NOW
                </Button>
              </Link>
            </div>
            </div>
            </div>
          

    </main>
  );
}

export default Newsletter;
