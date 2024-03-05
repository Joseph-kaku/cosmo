'use client'

import { Button } from "flowbite-react"
import Image from 'next/image'

export default function Picture({ pic }: { pic: string }) {
    return (
        <div className="relative w-screen h-screen overflow-hidden"> 
            <Image  src={pic} alt="..." layout="fill" objectFit="cover"/>
            <div className="absolute top-64 left-96">
                <p>test</p>
                <Button>button</Button>
            </div>
        </div>
    )
}