import React from 'react'
import {FaGithub, FaYoutube, FaTwitter, FaReddit, FaDiscord} from "react-icons/fa"
import {SiOsu} from "react-icons/si"


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                Twitter <FaTwitter size={30} />
            </>
            ),
            href: 'https://twitter.com/_Raptorr',
            style: 'rounded-td-md'
        },
        {
            id: 2,
            child: (
                <>
                Reddit <FaReddit size={30} />
            </>
            ),
            href: 'https://www.reddit.com/user/XxF1RExX',

        },
        {
            id: 3,
            child: (
                <>
                Youtube <FaYoutube size={30} />
            </>
            ),
            href: 'https://www.youtube.com/channel/UC2GAuWf4SPIMRkCHuwVUu1g',

        },
        {
            id: 4,
            child: (
                <>
                Github <FaGithub size={30} />
            </>
            ),
            href: 'https://github.com/Raptor1818',
        },
        {
            id: 5,
            child: (
                <>
                osu! profile <SiOsu size={30} />
            </>
            ),
            href: 'https://osu.ppy.sh/users/15854778',
            style: 'rounded-td-md'
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li
                        key={id}
                        className={
                            'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] rounded-md duration-300' +
                            ' ' +
                            style
                        }
                    >
                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks