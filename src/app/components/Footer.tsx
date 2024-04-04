
'use client';

import { Button, Footer } from 'flowbite-react';
import Popup from './Popup';
import Chatbot from './Chatbot';
import { useState } from 'react';

export default function Foot() {

  const [showChatbot, setShowChatbot] = useState(false);
  const handleToggleChatbot = () => {
    setShowChatbot(!showChatbot);
  }
  return (
    <Footer container className="rounded-none">
      <Footer.Copyright href="#" by="Gilber & Joseph™" year={2022} />
      <Footer.LinkGroup className="gap-4">
        <Popup />
        <Button onClick={handleToggleChatbot}> Chat </Button>
      </Footer.LinkGroup>
      {showChatbot && <Chatbot />}
    </Footer>
  );
}
