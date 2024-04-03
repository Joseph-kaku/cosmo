'use client'

import {Blockquote} from 'flowbite-react'
import { Rating } from 'flowbite-react'

export default function Aboutme() {
    return (
        <div className="w-screen h-screen">
            {/* <h1 className="text-4xl flex justify-center mt-5">
                About Me
            </h1> */}
            <div className="flex justify-center">
                <img className="h-96 w-96 rounded-full mt-5" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
            </div> 
            <div className="flex justify-center ml-40 mr-40">
                <Blockquote className='mt-5 text-lg dark:text-stone-100'>
                " Welcome to [Your Name]'s Beauty Haven!
                I'm [Your Name], your dedicated cosmetologist, here to bring out your natural beauty and boost your confidence. 
                With [X] years of experience and a passion for creativity, 
                I specialize in hair styling, color treatments, skincare, and makeup application.
                At my studio, it's all about you. I strive to provide personalized service, 
                staying updated on the latest trends and products to ensure you leave feeling your absolute best. 
                Let's work together to create a look that reflects your unique style and personality.
                I can't wait to meet you and embark on this beauty journey together! "
                <br></br>
                Warmly,
                [Your Name]
                </Blockquote>
            </div>    
        </div>
    )
}