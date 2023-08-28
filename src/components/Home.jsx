import React from 'react'
import mainPageF22 from '../assets/f22-no-bg.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import SocialLinks from './SocialLinks';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-4'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Welcome</h2>
                <p className='text-gray-500 py-4 max-w-md'>This is my personal website. It's still in progress so idk what to write here, trollino</p>
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
                <img src={mainPageF22} alt="F22 Title Image" className='mx-auto w-full md:w-[150%] md:max-w-none'/>
            </div>

            <div>
                <SocialLinks></SocialLinks>
            </div>
        </div>
    </div>
  )
}

export default Home