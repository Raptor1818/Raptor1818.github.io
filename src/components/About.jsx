import React, { useState, useEffect } from 'react';

import imageHtml from '../assets/html.png'
import imageCss from '../assets/css.png'
import imageReact from '../assets/react.png'
import imageTailwind from '../assets/tailwind.png'
import imageCPP from '../assets/cpp.png'
import imageJava from '../assets/java.png'

{/*import game1 from '../assets/games/battlebit.jpg'
import game2 from '../assets/games/cyberpunk.jpg'
import game3 from '../assets/games/factorio.jpg'
import game4 from '../assets/games/osugame.jpg'
import game5 from '../assets/games/minecraft.jpg'
import game6 from '../assets/games/terraria.jpg'*/}

import {FaCode, FaGamepad, FaUser} from "react-icons/fa"

const About = () => {
    return (
    <div className='w-full h-[210vh] bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white'>
        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col py-16 w-full h-full'>
            <div name="about" className='pb-8 pt-24 flex flex-row justify-center items-center'>
                <FaUser size={32} />
                <h1 className='text-5xl font-semibold inline ml-3'>About Me</h1>
            </div>

            <p className='text-xl mt-2 '>
                Hello, I am an 18 year student from Italy with a passion for gaming, programming, video editing and music.
            </p>

            <p className="text-xl mt-4">
                I have made various websites in vanilla HTML and CSS, including a Youtube style private streaming service. This is my first React Js and Tailwind project.
            </p>
            
            <div className='flex flex-col gap-3 mt-12'>
                <div className='max-w-screen-lg p-4 pb-24 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='pb-8 flex flex-row justify-center items-center'>
                        <FaCode className='px-2' size={60}/>
                        <h1 className="md:text-5xl text-4xl font-semibold mb-2 text-center md:w-auto w-min">Languages I speak</h1>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 px-12 sm:px-0 text-center hover:transform'>
                        <div className='shadow-md shadow-orange-600 rounded-md p-2'>
                            <img src={imageHtml} alt="HTML Logo" className='max-h-[128px] mx-auto' />
                            <p className='p-3'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-blue-400 rounded-md p-2'>
                            <img src={imageCss} alt="CSS Logo" className='max-h-[128px] mx-auto' />
                            <p className='p-3'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-blue-800 rounded-md p-2'>
                            <img src={imageCPP} alt="C++ Logo" className='max-h-[128px] mx-auto' />
                            <p className='p-3'>C++</p>
                        </div>
                        <div className='shadow-md shadow-orange-400 rounded-md p-2'>
                            <img src={imageJava} alt="Java Logo" className='max-h-[128px] mx-auto' />
                            <p className='p-3'>Java</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center'>
                    <div className='max-w-screen-lg p-4 mx-auto items-center'>
                        <div className='pb-8 flex flex-row justify-center items-center'>
                            <FaGamepad className='px-2' size={60} />
                            <h2 className="text-4xl font-semibold mb-2 text-center md:w-auto w-min">Gaming Related</h2>
                        </div>
                        
                        {/*<div className='grid grid-cols-3 gap-8 px-12 sm:px-0 text-center'></div>*/}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About