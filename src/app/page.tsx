import Hero from '@/components/views/hero/page';


import React from 'react';
import Promotion from '@/components/views/promotion/page';
import Hotproducts from '@/components/views/hotproducts/page';
import Newsletter from '@/components/views/description/page';
import Newsletter2 from '@/components/views/newsletter2/page';

export default function Forland() {
  return (
    <>
    <Hero/>
    <Promotion/>
    <Hotproducts/>
    <Newsletter></Newsletter>
    <Newsletter2/>
    </>
  );
}
