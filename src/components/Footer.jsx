import React from 'react';

const Footer = () => {
  return (
    <div className='h-fit px-8 pt-10 text-gray-600 bg-gradient-to-b from-gray-900 via-black to-black'>
      <div className='flex flex-row items-center justify-between p-10'>
        <div></div>
        <div className='flex flex-row items-center space-x-2 font-ibm-plex-mono'>
          <p>© 2023 All rights reserved <b>|</b> Made in</p>
          <a href='https://vitejs.dev/' target='_blank' className='underline'>
            Vite
          </a>
          <a href='https://react.dev/' target='_blank' className='underline'>
            React Js
          </a>
          <p>and</p>
          <a href='https://tailwindcss.com/' target='_blank' className='underline'>
            Tailwind
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
