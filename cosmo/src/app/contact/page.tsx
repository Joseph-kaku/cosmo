'use client'

import {useState} from 'react';

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
            <div>
                <img />
                <div>
                <p> Name: </p>
                <p> Email: </p>
                <p> Phone: </p>
                <div>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <p> Instagram</p>
                    </a>
                </div>
                </div>
            </div>
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className='text-black' />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}className='text-black' />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className='text-black' />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={4} cols={50} value={formData.message} onChange={handleChange} className='text-black' ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            </div>
        </div>
    )
}