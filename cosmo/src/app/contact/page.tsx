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
            <div>
    <h1>Location on Map</h1>
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
    )
}