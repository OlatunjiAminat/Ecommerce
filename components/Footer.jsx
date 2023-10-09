import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faFacebook,  faInstagram} from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <div className='bg-deep-black lg:px-32 '>
        <div className='md:mx-10'>
            <div className='lg:flex justify-between '>
                <div className='pb-6 pt-10 flex justify-center md:justify-start'>
                    <Image src="/audiophile.png" alt="logo"  width={90} height={10} loading="lazy"  className="" />
                </div>
                <div className='text-xs font-thin text-white text-center md:flex justify-start items-center lg:pt-8'>
                    <div className='hover:text-deep-brown mb-4 md:mr-7'>
                        <Link href="#">HOME</Link>
                    </div>
                    <div className='hover:text-deep-brown mb-4 md:mr-7'>
                        <Link href="#">HEADPHONES</Link>
                    </div>
                    <div className='hover:text-deep-brown mb-4 md:mr-7'>
                        <Link href="#">SPEAKERS</Link>
                    </div>
                    <div className='hover:text-deep-brown mb-4'>
                        <Link href="#">EARPHONES</Link>
                    </div>
                </div>
            </div>
            <div className='text-gray-400 text-center px-4 text-sm md:text-start md:pl-0 lg:max-w-[440px] '>
                <p className=''>Audiophile is an all in one stop to fullfil your audio needs.We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
            </div>
            <div className='md:flex justify-between items-center'>
                <div className='text-gray-400 text-center px-4 text-sm my-7 md:pl-0'>
                    <p>Copyright 2023. All Right Reserve</p>
                </div>
                <div className='flex justify-center items-center pb-8 md:pb-1 md:pt-0 lg:mt-[-100px]'>
                    <div className=''>
                        <Link href="#" className='text-white rounded-lg mr-2 hover:text-deep-brown'><FontAwesomeIcon icon={faFacebook} /></Link>
                    </div>
                    <div className=''>
                        <Link href="#" className='text-white mr-2 hover:text-deep-brown'><FontAwesomeIcon icon={faTwitter} /></Link>
                    </div>
                    <div className=''>
                        <Link href="#" className='text-white mr-2 hover:text-deep-brown'><FontAwesomeIcon icon={faInstagram} /></Link>
                    </div>
                </div>
            </div>

        </div>
        
        
    </div>
  )
}

export default Footer