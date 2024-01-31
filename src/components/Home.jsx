import React, { useState, useEffect } from 'react';
import mainPageF22 from '/img/f22-no-bg.webp'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import SocialLinks from './SocialLinks';
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect';
import StarField from './StarField';

const Home = () => {
    const typewriterStrings = [
        "Hello World!",
        "Coding rn",
        "Probably watching Youtube",
        "Gaming rn",
        "Not a furry",
        "Sniffing copium",
        "Listening to metal",
        "Wake up samurai.",
        ":clueless:",
        ":clueful:",
        "Do not the cat.",
        "Literally needs to breathe (noob) ->",
        "I spend more time modding than playing games",
        "Programming metal drum tracks",
        "Aircraft lover",
        "gg vez",
        "Dragonforce lover", 
        "Avenged Sevenfold lover",
        "Living inside your walls",
        "Pizza lover",
        "What is an \"outside\"?",
        "Running out of ideas",
        ">be me",
        "Learning React Js",
        "Assembly makes me scream inside",
        "Neofetch yourself",
        "Display: flexing",
        "At the gym",
        ":trolleybus:",
        "There is nothing wrong with fries on pizza.",
        "Peak osu!std rank: #58k",
        "Don't drink and code",
        "Whitecat is my dad",
        "Segmention fault (core dumped)"
    ]

    const [shuffledStrings, setShuffledStrings] = useState([]);

    useEffect(() => {
        const shuffled = [...typewriterStrings];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setShuffledStrings(shuffled);
    }, []);

  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 relative'>
        <StarField />
        <div className='relative max-w-screen-lg mx-auto flex flex-col md:items-center justify-center h-full px-4 md:flex-row pl-12'>
            <div className='flex flex-col justify-center h-[8rem]'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Welcome</h2>
                <span className='text-gray-500 py-4 max-w-md text-xl'>
                    <Typewriter
                        options={{
                            strings: shuffledStrings,
                            delay: 55,
                            deleteSpeed: 30,
                            pauseFor: 1750,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
                <div>
                    <Link to="about" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        About Me
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={23} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>

            <div className='mt-6'>
                <img src={mainPageF22} alt="F22 Title Image" className='mx-auto md:max-w-[150%] max-w-[120%] md:left-0 -left-11 relative select-none' draggable="false"/>
            </div>

            <div>
                <SocialLinks></SocialLinks>
            </div>

        </div>
          
        <div className='w-full'>
          <h1 className='text-3xl text-red-300 font-bold text-center'>New website is WIP</h1>
        </div>
    </div>
  )
}

export default Home