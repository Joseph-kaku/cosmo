'use client'

import {Blockquote} from 'flowbite-react'
import Image from 'next/image'
import liz from '../../../public/liz.jpg'

export default function Aboutme() {
    return (
        <div className="w-screen h-screen">
            <div className="flex justify-center mt-10">
            <Image src={liz} alt={'Liz Portrait'} width={200} height={200} className="rounded-full shadow-lg hover:scale-110"/>
            </div> 
            <div className="flex justify-center ml-40 mr-40">
                <Blockquote className='mt-5 text-lg dark:text-stone-100'>
                " Welcome to Elizabeth's Beauty Haven!
                I'm Elizabeth, your dedicated cosmetologist, here to bring out your natural beauty and boost your confidence. 
                With 2 years of experience and a passion for creativity, 
                I specialize in hair styling, color treatments, and haircuts.
                At my studio, it's all about you. I strive to provide personalized service, 
                staying updated on the latest trends and products to ensure you leave feeling your absolute best. 
                Let's work together to create a look that reflects your unique style and personality.
                I can't wait to meet you and embark on this beauty journey together! "
                <br></br>
                Warmly,
                Elizabeth Kaku
                </Blockquote>
            </div>   
        </div>
    )
}