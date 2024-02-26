import { StaticImageData } from "next/image"

export type prdts={
    id:string,
    title:string,
    price:number,
    catagorey: string
    image:string | StaticImageData,
}