/* eslint-disable react/no-unescaped-entities */

'use client';

import { Accordion } from 'flowbite-react';
import { Label, Textarea, Button } from 'flowbite-react';

export default function ServicesLayout() {
  return (
    <div>
    <div className='mb-20'>
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>Hair Services</Accordion.Title>
        <Accordion.Content className="mb-2 text-gray-500 dark:text-gray-400">
          <div>
            <ul>
              <li>Haircuts (for men, women, and children): $20 - $100+</li>
              <li>Hairstyling (blowouts, updos, etc.): $30 - $100+</li>
              <li>Hair coloring (highlights, lowlights, balayage, ombre, etc.): $50 - $300+</li>
              <li>Hair treatments (deep conditioning, keratin treatments, etc.): $20 - $400+</li>
              <li>Hair extensions (application, removal, maintenance): $50 - $800+</li>
            </ul>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Nail Services</Accordion.Title>
        <Accordion.Content className="mb-2 text-gray-500 dark:text-gray-400">
              <ul>
                <li>Manicures: $20 - $50</li>
                <li>Pedicures: $30 - $60</li>
                <li>Nail art/design: $5 - $20 per nail</li>
                <li>Gel nails: $30 - $60</li>
                <li>Acrylic nails: $40 - $80</li>
                <li>Nail extensions: $50 - $100+</li>
              </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Skincare Services</Accordion.Title>
        <Accordion.Content className="mb-2 text-gray-500 dark:text-gray-400">
          <div>
            <ul>
              <li>Facials (deep cleansing, exfoliation, masks, etc.): $50 - $150+</li>
              <li>Chemical peels: $75 - $200+</li>
              <li>Microdermabrasion: $80 - $200+</li>
              <li>Dermaplaning: $75 - $150+</li>
              <li>Facial waxing/threading: $10 - $30</li>
              <li>Eyebrow shaping: $15 - $40</li>
            </ul>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Body Services</Accordion.Title>
        <Accordion.Content className="mb-2 text-gray-500 dark:text-gray-400">
          <div>
            <ul>
              <li>Waxing(Legs/Arms/Underarms/Bikini): $20 - $60</li>
              <li>Sugaring: $20 - $60</li>
              <li>Spray tanning: $25 - $50</li>
              <li>Body scrubs/exfoliation: $50 - $100</li>
              <li>Massage therapy: $60 - $150+ per hour</li>
            </ul>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>

    <div>
      <h2 className='flex justify-center items-center text-stone-50' >Customer Review</h2>
    <Label>Your Review</Label>
    <Textarea id="comment" placeholder="Leave a review..." required rows={4} className="max-w-96 mb-5" />
    <Button type="submit">Submit</Button>
    </div>

    </div>
  );
}
