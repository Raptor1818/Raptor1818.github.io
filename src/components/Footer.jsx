import React from 'react';

const Footer = () => {
  let dt = new Date(); let crntYear = dt.getFullYear()
  return (
    <div className='h-fit px-8 pt-10 text-gray-700 bg-black'>
      <div className='flex flex-row items-center justify-between p-6'>
        <div></div>
        <div className='flex flex-row items-center space-x-2 font-ibm-plex-mono'>
          <p>© { crntYear } All rights reserved</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
