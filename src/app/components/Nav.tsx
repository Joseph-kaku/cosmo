'use client'


import React, { useState, useEffect } from "react";

export default function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [theme, setTheme] = useState("light"); // Default to light theme

  // Function to toggle menu visibility
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Function to detect system theme
  const detectSystemTheme = () => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    setTheme(systemTheme);
  };

  useEffect(() => {
    // Detect system theme when component mounts
    detectSystemTheme();

    // Add event listener to detect system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectSystemTheme);

    // Cleanup event listener on component unmount
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', detectSystemTheme);
    };
  }, []);

  return (
    <nav className={`bg-${theme === 'dark' ? 'black' : 'white'} border-${theme === 'dark' ? 'black' : 'white'} dark:bg-gray-900`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={toggleMenuVisibility}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-label={isMenuVisible ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">
            {isMenuVisible ? "Close menu" : "Open menu"}
          </span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuVisible ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className={`font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-${theme === 'dark' ? 'black' : 'white'} md:flex-row md:space-x-60 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-${theme === 'dark' ? 'black' : 'white'} dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
            <li>
              <a href="/" className={`block py-1 px-3 text-${theme === 'dark' ? 'white' : 'black'} hover:bg-blue-700 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`} >Home</a>
            </li>
            <li>
              <a href="/about" className={`block py-2 px-3 text-${theme === 'dark' ? 'white' : 'black'} rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About</a>
            </li>
            <li>
              <a href="/gallery" className={`block py-2 px-3 text-${theme === 'dark' ? 'white' : 'black'} rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Gallery</a>
            </li>
            <li>
              <a href="/services" className={`block py-2 px-3 text-${theme === 'dark' ? 'white' : 'black'} rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Services</a>
            </li>
            <li>
              <a href="/contact" className={`block py-2 px-3 text-${theme === 'dark' ? 'white' : 'black'} rounded hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


