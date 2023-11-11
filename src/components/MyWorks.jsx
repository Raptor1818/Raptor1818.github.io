import React from 'react';
import { FaLightbulb, FaGithub, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const MyWorks = () => {

  const works = [
    {
      id: 1,
      title: 'Raptorino',
      screenshotUrl: '/img/works/raptorino-com.webp',
      hrefUrl: 'https://github.com/Raptor1818/raptorino',
      linkTo: FaGithub,
      langs: [FaReact, SiTailwindcss]
    },
    {
      id: 2,
      title: 'Bar Calc',
      screenshotUrl: '/img/works/bar-calculator-vercel-app.webp',
      hrefUrl: 'https://github.com/Raptor1818/bar-calculator',
      linkTo: FaGithub,
      langs: [FaReact, SiTailwindcss]
    },
    {
      id: 3,
      title: 'WIP...',
      screenshotUrl: '/img/works/cat-WIP.webp',
    }
  ];

  return (
    <div name="my works" className="h-fit w-full bg-gradient-to-b from-gray-900 via-black to-black text-white">
      <div className='max-w-screen-lg p-4 pb-24 mx-auto flex flex-col justify-center w-full h-full gap-16'>
        <div className='pb-8 pt-24 flex flex-row justify-center items-center'>
            <FaLightbulb className='px-2' size={60} />
            <h1 className="md:text-5xl text-4xl font-semibold mb-2 text-center md:w-auto">My Works</h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 px-4 md:px-0'>
          {works.map(work => (
            <a href={work.hrefUrl} target='_blank' rel="noopener noreferrer" key={work.id}>
              <div className='rounded-lg border-[1px] border-gray-900 shadow-md shadow-gray-800 duration-200 hover:scale-105 overflow-hidden text-center'>
                <img 
                  src={work.screenshotUrl} 
                  alt={work.title} 
                  className='w-full h-48 object-cover'
                />
                <div className='grid grid-cols-3 justify-center items-center p-4 text-3xl'>
                  <div className='flex flex-row justify-center items-center gap-2'>
                    {work.linkTo && <work.linkTo />}
                  </div>
                  <p className='text-lg'>{work.title}</p>
                  <div className='flex flex-row justify-center items-center gap-2'>
                    {work.langs && work.langs.map((LangIcon, index) => <LangIcon key={index} />)}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyWorks;
