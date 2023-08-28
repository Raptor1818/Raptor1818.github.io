import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';


const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [ 
    {
        id: 1,
        link: "home"
    },
    {
        id: 2,
        link: "about"
    },
    {
        id: 3,
        link: "socials"
    },
    {
        id: 4,
        link: "my things"
    },
  ]

    return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl ibm-plex-m,ono italic ml-2'>RaptorHub</h1> {/*Place holder*/}
        </div>

        <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>
                    <Link
                        activeClass="active"
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust the offset as needed
                        duration={500}
                    >
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
        
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-gray-900 text-gray-500 ">
            {links.map(({ id, link }) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    <Link
                        onClick={() => setNav(!nav)}
                        activeClass="active"
                        to={link}
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust the offset as needed
                        duration={500}
                    >
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default NavBar