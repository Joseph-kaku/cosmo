'use client'

import {useState} from 'react';
import { Card } from 'flowbite-react';
import { Label, Textarea } from 'flowbite-react';
import Image from 'next/image';
import self from '../../../public/selfpotrait.jpeg';


export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Here you can send the message using formData
        console.log('Message sent:', formData);
        // Optionally, you can reset the form after sending the message
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };
    return (
    <div>
        <div className="flex justify-center items-center mt-10">
            <Card className="max-w-sm">
                <div className="flex flex-col items-center pb-10">
                    <Image
                    alt="Bonnie image"
                    height="96"
                    src={self}
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
    <div>
    <h1 className="text-3xl mb-10">Send me a message</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className='text-black' />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className='text-black' />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className='text-black' />
            </div>
            <div>
                <Label htmlFor="message" value='Message:' className='text-white'/>
                <Textarea id="message" name="message" onChange={handleChange}  value={formData.message}  placeholder="Send a message..." required rows={4} cols={50} />
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
    <div>
        <h1 className="text-3xl">Location on Map</h1>
        <iframe
            srcDoc={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.052609656263!2d-111.79847942442194!3d43.81326814206433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53540b092fadfe1b%3A0xc746993c26b452ae!2s415%20W%206th%20S%2C%20Rexburg%2C%20ID%2083440!5e0!3m2!1sen!2sus!4v1708107924086!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
    </div>
    </div>
    )
}