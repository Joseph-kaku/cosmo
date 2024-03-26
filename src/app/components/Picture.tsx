'use client'

import { Button } from "flowbite-react"
import Image from 'next/image'

export default function Picture({ pic }: { pic: string }) {
    return (
        <div className="relative w-screen h-screen overflow-hidden"> 
            <Image  src={pic} alt="..." layout="fill" objectFit="cover"/>
            <div className="absolute top-1/2 left-2/3 ">
                <p>Learn more about me and my journey </p>
                <Button href="/about" >Learn more</Button>
            </div>
        </div>
    )
}