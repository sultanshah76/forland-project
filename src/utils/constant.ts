import men from '/public/images/products/mens/1/YSDRXDFTF.webp'
import women from '/public/images/products/womens/1/WOMEN SIDE STRIPED TROUSER.webp'
import kids from '/public/images/products/kids/1/JUPITER STANDING COLLAR TRACK SUIT FOR KIDS (2-14 YEARS).webp'
import men2 from '/public/images/products/mens/2/JUPITER CHALLENGER ATHLEISURE TRACK SUIT.webp'
import women2 from '/public/images/products/womens/2/JUPITER WOMEN PHOENIX CO ORD FLEECE TWIN SET.webp'
import kids2 from '/public/images/products/kids/2/JUPITER STANDING COLLAR UNISEX KIDS TRACK SUITS (2-14 YEARS).webp'
import men3 from '/public/images/products/mens/3/JUPITER CHALLENGER ATHLEISURE TWINSET.webp'
import kids3 from '/public/images/products/kids/3/JUPITER KIDS FURRY SHERPA SUIT.webp'
import women3 from '/public/images/products/womens/3/WOMEN MOCK NECK FRONT EMBELLISHMENT WHITE SWEATSHIRT.webp'
import {prdts} from 'src/utils/types'
export const APP_LINKS= [

    {
        name: "MALE",
        href:"/Catagorey/MALE",
    },
    {
        name: "FEMALE",
        href:"/Catagorey/FEMALE",
    },
    {
        name: "KIDS",
        href:"/Catagorey/KIDS",
    },
    {
        name: "ALL PRODUCTS",
        href:"/allproducts",
    },
];
export const products:prdts[]= [
    {
        id:"1",
        title: "ATHLEISURE TRACK SUIT",
        price:600,
        image:men,
        catagorey:"MALE",
    },
    {
        id:"2",
        title: "FLEECE TWIN SET",
        price:1200,
        catagorey:"FEMALE",
        image:women2,
    },
    {
        id:"3",
        title: "UNISEX TRACK SUITS",
        price:2000,
        catagorey:"KIDS",
        image:kids2,
    },
    {
        id:"4",
        title: "FUNKY SWEATSHIRT",
        price:600,
        catagorey:"FEMALE",
        image:women3,
    },
    {
        id:"5",
        title: "CHALLENGER TRACK SUIT",
        price:800,
        catagorey:"MALE",
        image:men2,
    },
    {
        id:"6",
        title: "CASUAL SHIRT",
        price:300,
        catagorey:"FEMALE",
        image:women,
    },
    {
        id:"7",
        title: "STANDING COLLAR TRACK SUIT",
        price:900,
        catagorey:"KIDS",
        image:kids,
    },
    {
        id:"8",
        title: "CHALLENGER TWINSET",
        price:700,
        catagorey:"MALE",
        image:men3,
    },
    {
        id:"9",
        title: "FURRY SHERPA SUIT",
        price:1800,
        catagorey:"KIDS",
        image:kids3,
    },
    
];