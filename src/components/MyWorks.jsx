import React from 'react'
import { FaLightbulb } from "react-icons/fa"

const MyWorks = () => {

  const works = [
    { id: 1, title: 'Raptorino', screenshotUrl: '/img/works/raptorino-com.webp', hrefUrl: 'https://https://github.com/Raptor1818/raptorino'},
    { id: 2, title: 'Bar Calculator', screenshotUrl: '/img/works/bar-calculator-vercel-app.webp', hrefUrl: 'https://github.com/Raptor1818/bar-calculator'},
    { id: 3, title: 'WIP...', screenshotUrl: ''}
  ];

  return (
    <div name="my works" className="h-fit w-full bg-gradient-to-b from-gray-900 via-black to-black text-white">
      <div className='max-w-screen-lg p-4 pb-24 mx-auto flex flex-col justify-center w-full h-full gap-16'>
        <div className='pb-8 pt-24 flex flex-row justify-center items-center'>
            <FaLightbulb className='px-2' size={60} />
            <h1 className="md:text-5xl text-4xl font-semibold mb-2 text-center md:w-auto w-min">My Works</h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-8 px-12 md:px-0'>
          {works.map(work => (
            <div key={work.id} className='rounded-lg border-[1px] border-gray-900 shadow-md shadow-gray-600'>
                <a href={work.hrefUrl}>
                  <img src={work.screenshotUrl} alt={work.title}  className="roudned-md duration-200 hover:scale-105" />
                </a>
                <div className='flex items-center justify-center p-4'>
                  <p>{work.title}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyWorks