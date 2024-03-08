/* eslint-disable react/no-unescaped-entities */

'use client';

import { Accordion } from 'flowbite-react';

export default function ServicesLayout() {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>Hair Cut</Accordion.Title>
        <Accordion.Content className="mb-2 text-gray-500 dark:text-gray-400">
          <div>
          <h2>Women's Haircuts:</h2>
            <ul>
              <li>Layered Cut: A classic style that adds dimension and movement to your hair.</li>
              <li>Bob Cut: A versatile and timeless style that can be customized to suit your face shape.</li>
              <li>Pixie Cut: Short and stylish, perfect for those who want a low-maintenance look.</li>
              <li>Bangs Trim: Refresh your look with a quick trim for your fringe.</li>
              <li>Long Hair Trim: Maintain the length of your long hair with a professional trim.</li>
            </ul>
            <h2>Men's Haircuts:</h2>
              <ul>
                <li>Crew Cut: A short and neat style that is easy to maintain.</li>
                <li>Undercut: Trendy and modern, with longer hair on top and short sides.</li>
                <li>Fade Cut: Gradually fades from short to longer hair, creating a clean and sharp look.</li>
                <li>Buzz Cut: A short, uniform length all over the head for a low-maintenance style.</li>
                <li>Classic Cut: Timeless and versatile, suitable for various hair types and face shapes.</li>
              </ul>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Nails </Accordion.Title>
        <Accordion.Content className="mb-2 text-gray-500 dark:text-gray-400">
          <h2>Basic Services:</h2>
            <ul>
              <li>Manicure: Includes nail shaping, cuticle care, hand massage, and polish application.</li>
              <li>Pedicure: Includes foot soak, nail shaping, cuticle care, callus removal, foot massage, and polish application.</li>
              <li>Polish Change (Hands or Feet): Includes nail shaping and polish application.</li>
            </ul>
            <h2>Specialty Services:</h2>
              <ul>
                <li>Gel Manicure: Long-lasting polish that resists chipping for up to two weeks.</li>
                <li>Gel Pedicure: Extend the life of your pedicure with gel polish.</li>
                <li>Acrylic Full Set: Sculpted or tips applied to enhance nail length and strength.</li>
                <li>Acrylic Fill: Maintenance for acrylic nails, includes shaping and polish.</li>
                <li>Dip Powder Manicure: Durable and chip-resistant manicure with a variety of colors and designs.</li>
                <li>Nail Art (Per Nail): Custom nail designs, glitter, rhinestones, and more.</li>
              </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>other</Accordion.Title>
        <Accordion.Content className="mb-2 text-gray-500 dark:text-gray-400">
          <div>
          <h2>Other Services:</h2>
            <ul>
              <li>Makeup: Includes makeup application, powder, and eyeliner.</li>
              <li>Massage: Includes hand massage, foot massage, and facial massage.</li>
              <li>Manicure: Includes nail shaping, cuticle care, hand massage, and polish application.</li>
              <li>Pedicure: Includes foot soak, nail shaping, cuticle care, callus removal, foot massage, and polish application.</li>
              <li>Acrylic Full Set: Sculpted or tips applied to enhance nail length and strength.</li>
              <li>Acrylic Fill: Maintenance for acrylic nails, includes shaping and polish.</li>
              <li>Dip Powder Manicure: Durable and chip-resistant manicure with a variety of colors and designs.</li>
              <li>Nail Art (Per Nail): Custom nail designs, glitter, rhinestones, and more.</li>
            </ul>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
