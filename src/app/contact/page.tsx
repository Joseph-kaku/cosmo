'use client'

import { Card, TextInput } from 'flowbite-react';
import { Label, Textarea, Button } from 'flowbite-react';
import Image from 'next/image';
import self from '../../../public/selfpotrait.jpeg';
import liz from '../../../public/liz.jpg';
import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs (){
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return; // Ensure form exists

    emailjs
      .sendForm('service_4s2rq47', 'template_epwz59j', form.current, {
        publicKey: '8A30_FrGFddt3en9W',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current?.reset(); // Reset the form
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
    <div className="flex justify-center items-center mt-10">
            <Card className="max-w-full w-96">
                <div className="flex flex-col items-center pb-10">
                    <Image
                    alt="Bonnie image"
                    height="96"
                    src={liz}
                    width="96"
                    className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Elizabeth Marsh</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Cosmetologist</span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                            href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </Card>
        </div>
    <div className="flex flex-col lg:flex-row justify-between mt-20 ml-10">
        <div className='w-1/2 ml-14'>
            <h1 className="text-3xl mb-5">Send me a message</h1>
            <form ref={form}>
                <div>
                    <Label htmlFor="name" value="Name:" className='text-white' />
                    <TextInput id="name" type="text" name="name"   placeholder="name" required className='text-black' />
                </div>
                <div>
                    <Label htmlFor="email1" value="Email:" className='text-white' />
                    <TextInput id="email" type="email" name="email" placeholder="name@gmail.com" required className='text-black' />
                </div>
                <div>
                    <Label htmlFor="phone" value="Phone:" className='text-white' />
                    <TextInput type="tel" id="phone" name="phone"  placeholder="123-456-7890" required className='text-black' />
                </div>
                <div>
                    <Label htmlFor="message" value='Message:' className='text-white'/>
                    <Textarea id="message" name="message" placeholder="Send a message..." required rows={4} cols={50} />
                </div>
                <Button className='mt-5' type='submit' onClick={sendEmail}> Send </Button>
            </form>
        </div>
        <div className='w-1/2'>
        <h1 className="text-3xl">Location on Map</h1>
        <iframe
            srcDoc={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.052609656263!2d-111.79847942442194!3d43.81326814206433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540b092fadfe1b%3A0xc746993c26b452ae!2s415%20W%206th%20S%2C%20Rexburg%2C%20ID%2083440!5e0!3m2!1sen!2sus!4v1708107924086!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
            width="100%"
            height="450"
            style=
            {{ border: '0'}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>

    </div>
    </div>
  );
};
