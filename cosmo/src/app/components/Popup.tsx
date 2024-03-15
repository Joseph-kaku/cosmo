
'use client';

import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import {doc , setDoc} from 'firebase/firestore';
import { db } from '../../../../firebaseconfig';

export default function Popup() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email:', email);
    await setDoc(doc(db, 'users', email), {
      email: email
    })
    setOpenModal(false);
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className='bg-transparent'>Click me</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header> Want to receive weekly updates? </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            🌟 Stay in the loop with our latest beauty tips, exclusive offers, and exciting events! 
            Sign up now for our weekly newsletter and unlock access to expert skincare advice, trending makeup looks, 
            and special promotions tailored just for you. 
            Do not miss out on the chance to elevate your beauty routine and pamper yourself like never before. 
            Join our community of beauty enthusiasts today!
            </p>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleSubmit(event)}>Submit</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
