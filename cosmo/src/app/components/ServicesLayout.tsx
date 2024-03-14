/* eslint-disable react/no-unescaped-entities */

'use client';

import { Accordion } from 'flowbite-react';
import { Table } from 'flowbite-react';

export default function ServicesLayout() {
  return (
    <div>
      <div className='mb-20'>
      <Table striped >
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Google Pixel Phone
            </Table.Cell>
            <Table.Cell>Gray</Table.Cell>
            <Table.Cell>Phone</Table.Cell>
            <Table.Cell>$799</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</Table.Cell>
            <Table.Cell>Red</Table.Cell>
            <Table.Cell>Wearables</Table.Cell>
            <Table.Cell>$999</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </div>
    <div>
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
    </div>
  );
}
