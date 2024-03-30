'use client'

import { Navbar } from "flowbite-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";  

export default function Nav() {
  return (
    <Navbar fluid >
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/gallery">Gallery</Navbar.Link>
        <Navbar.Link href="/services">Services</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
        <div>
        <DarkThemeToggle />
        </div>
    </Navbar>
  );
}


