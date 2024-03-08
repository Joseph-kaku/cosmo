
'use client';

import { Footer } from 'flowbite-react';
import Popup from './Popup';

export default function Foot() {
  return (
    <Footer container className="rounded-none">
      <Footer.Copyright href="#" by="Gilber & Joseph™" year={2022} />
      <Footer.LinkGroup>
        <Popup />
      </Footer.LinkGroup>
    </Footer>
  );
}
