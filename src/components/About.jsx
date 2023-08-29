import React, { useState, useEffect } from 'react';

import imageHtml from '../assets/html.png'
import imageCss from '../assets/css.png'
import imageReact from '../assets/react.png'
import imageTailwind from '../assets/tailwind.png'
import imageCPP from '../assets/cpp.png'
import imageJava from '../assets/java.png'

import game11 from '../assets/games/battlebit.jpg'
import game12 from '../assets/games/cyberpunk.jpg'
import game13 from '../assets/games/factorio.jpg'
import game21 from '../assets/games/osugame.jpg'
import game22 from '../assets/games/minecraft.jpg'
import game23 from '../assets/games/terraria.jpg'

import {FaCode, FaGamepad, FaUser} from "react-icons/fa"

const About = () => {
    const gamesGroup1 = [
        {
            id: 1,
            image: game11,
        },
        {
            id: 2,
            image: game12,
        },
        {
            id: 3,
            image: game13,
        }
    ];
    const gamesGroup2 = [
        {
            id: 4,
            image: game21,
        },
        {
            id: 5,
            image: game22,
        },
        {
            id: 6,
            image: game23,
        },
    ]

    const [currentGameIndexGroup1, setCurrentGameIndexGroup1] = useState(0);
    const [currentGameIndexGroup2, setCurrentGameIndexGroup2] = useState(0);

    useEffect(() => {
        const intervalGroup1 = setInterval(() => {
            setCurrentGameIndexGroup1((prevIndex) => (prevIndex + 1) % gamesGroup1.length);
        }, 4000); // Change image every 4 seconds

        const intervalGroup2 = setInterval(() => {
            setCurrentGameIndexGroup2((prevIndex) => (prevIndex + 1) % gamesGroup2.length);
        }, 4000); // Change image every 4 seconds

        return () => {
            clearInterval(intervalGroup1);
            clearInterval(intervalGroup2);
        };
    }, []);

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
                I have made various websites in vanilla HTML and CSS, including a Youtube style private streaming service, however this is my first React Js and Tailwind project.
            </p>
            

            <div className='flex flex-col gap-3 mt-12'>
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='pb-8 flex flex-row justify-center items-center'>
                        <FaCode className='px-2' size={60}/>
                        <h1 className="text-5xl font-semibold mb-2">Languages I speak</h1>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0 text-center'>
                        <div>
                            <img src={imageHtml} alt="HTML Logo" className='max-h-[216px] mx-auto' />
                            <p className='p-3'>HTML</p>
                        </div>
                        <div>
                            <img src={imageCss} alt="CSS Logo" className='max-h-[216px] mx-auto' />
                            <p className='p-3'>CSS</p>
                        </div>
                        <div>
                            <img src={imageCPP} alt="C++ Logo" className='max-h-[216px] mx-auto' />
                            <p className='p-3'>C++</p>
                        </div>
                        <div>
                            <img src={imageJava} alt="Java Logo" className='max-h-[216px] mx-auto' />
                            <p className='p-3'>Java</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center'>
                    <div className='max-w-screen-lg p-4 mx-auto'>
                        <div className='pb-8 flex flex-row justify-center items-center'>
                            <FaGamepad className='px-2' size={60} />
                            <h2 className="text-4xl font-semibold mb-2">Favourite Games</h2>
                        </div>
                        <div className='grid grid-cols-2 gap-8 px-12 sm:px-0 text-center'>
                            <div className='relative'>
                                {gamesGroup1.map((game, index) => (
                                    <div
                                        key={index}
                                        className={`transition-opacity duration-1000 ${
                                            currentGameIndexGroup1 === index ? 'opacity-100' : 'opacity-0'
                                        } absolute inset-0`}
                                    >
                                        <img
                                            src={game.image}
                                            alt={`Game ${index}`}
                                            className='max-h-[216px] mx-auto'
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='relative' name='gruppo 2'>
                                {gamesGroup2.map((game, index) => (
                                    <div
                                        key={index}
                                        className={`transition-opacity duration-1000 ${
                                            currentGameIndexGroup2 === index ? 'opacity-100' : 'opacity-0'
                                        } absolute inset-0`}
                                    >
                                        <img
                                            src={game.image}
                                            alt={`Game ${index}`}
                                            className='max-h-[216px] mx-auto'
                                        />
                                    </div>
                                ))}
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