import React, { useState, useEffect } from 'react';

import imageHtml from '../assets/html.webp'
import imageCss from '../assets/css.webp'
import imageReact from '../assets/react.webp'
import imageTailwind from '../assets/tailwind.webp'
import imageCPP from '../assets/cpp.webp'
import imageJava from '../assets/java.webp'
import imageSteamReplay from '../assets/games/SteamReplay2022.webp'

{/*import game1 from '../assets/games/battlebit.webp'
import game2 from '../assets/games/cyberpunk.webp'
import game3 from '../assets/games/factorio.webp'
import game4 from '../assets/games/osugame.webp'
import game5 from '../assets/games/minecraft.webp'
import game6 from '../assets/games/terraria.webp'*/}

import {FaCode, FaGamepad, FaUser, FaBookReader} from "react-icons/fa"

import SteamMiniProfile from './SteamMiniProfile'

const About = () => {
    return (
    <div className='w-full h-fit bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white'>
        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col py-16 w-full h-full'>
            <div name="about" className='pb-8 pt-24 flex flex-row justify-center items-center'>
                <FaUser size={32} />
                <h1 className='text-5xl font-semibold inline ml-3'>About Me</h1>
            </div>

            <p className='text-xl mt-2 '>
                Hello, I am an 18 year old student from Italy with a passion for gaming, programming, video editing and music.
            </p>

            <p className="text-xl mt-4">
                I have made various websites in vanilla HTML and CSS, including a Youtube style private streaming service. This is my first React Js and Tailwind project.
            </p>
            
            <div className='flex flex-col gap-3 mt-12'>
                <div className='max-w-screen-lg p-4 pb-24 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='pb-8 flex flex-row justify-center items-center'>
                        <FaCode className='px-2' size={60} />
                        <h1 className="md:text-5xl text-4xl font-semibold mb-2 text-center md:w-auto w-min">Languages I speak</h1>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 px-12 sm:px-0 text-center'>
                        <div className='shadow-md shadow-[#e44d26] rounded-md p-2 hover:scale-105 transform transition-transform duration-300'>
                        <img src={imageHtml} alt="HTML Logo" className='max-h-[128px] mx-auto' />
                        <p className='p-3'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#039be5] rounded-md p-2 hover:scale-105 transform transition-transform duration-300'>
                        <img src={imageCss} alt="CSS Logo" className='max-h-[128px] mx-auto' />
                        <p className='p-3'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#004283] rounded-md p-2 hover:scale-105 transform transition-transform duration-300'>
                        <img src={imageCPP} alt="C++ Logo" className='max-h-[128px] mx-auto' />
                        <p className='p-3'>C++</p>
                        </div>
                        <div className='shadow-md shadow-[#e26c00] rounded-md p-2 hover:scale-105 transform transition-transform duration-300'>
                        <img src={imageJava} alt="Java Logo" className='max-h-[128px] mx-auto' />
                        <p className='p-3'>Java</p>
                        </div>
                    </div>
                    <div className='pb-8 mt-16 flex flex-row justify-center items-center'>
                        <FaBookReader className='px-2' size={45} />
                        <h1 className="md:text-3xl text-2xl font-semibold mb-2 text-center md:w-auto w-min">New to</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-5 px-12 sm:px-0 text-center'>
                        <div className='shadow-md shadow-[#00d6fe] rounded-md p-2 hover:scale-105 transform transition-transform duration-300'>
                        <img src={imageReact} alt="React JS Logo" className='max-h-[128px] mx-auto' />
                        <p className='p-3'>React JS</p>
                        </div>
                        <div className='shadow-md shadow-[#44a8b3] rounded-md p-2 hover:scale-105 transform transition-transform duration-300'>
                        <img src={imageTailwind} alt="Tailwind Logo" className='max-h-[128px] mx-auto' />
                        <p className='p-3'>Tailwind</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='max-w-screen-lg md:p-4 p-2 mx-auto items-center'>
                        <div className='pb-8 flex flex-row justify-center items-center'>
                            <FaGamepad className='px-2' size={60} />
                            <h2 className="text-4xl font-semibold mb-2 text-center md:w-auto w-min">Gaming Related</h2>
                        </div>
                        <div className='flex flex-col md:flex-row md:items-start items-center gap-12'>
                            <div>
                                <SteamMiniProfile />
                            </div>
                            <div className='md:py-0 pt-8'>
                                <img src={imageSteamReplay} alt="Steam Replay 2022 image" className='max-w-[80%] mx-auto'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About