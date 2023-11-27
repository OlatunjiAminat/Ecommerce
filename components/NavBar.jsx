"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { useRouter } from "next/navigation";


function NavBar(){ 
   
    // const currentRoute = router.pathname;
    const [showHamburger, setShowHamburger] = useState(false);
  
    const toggleHamburger = () => {
      setShowHamburger(!showHamburger);
    };
    const router = useRouter()
    return (
      <>
          <nav className="bg-deep-black text-white py-4 lg:pt-10">
            <div className="flex justify-around items-center">
                <div className="lg:flex justify-around items-center">
                    <div>
                        <button  onClick={toggleHamburger} className="lg:hidden">
                            <FontAwesomeIcon icon={faBars} className=""/>
                        </button>
                    </div>
                    
                    <div className="ml-20 mt-[-18px] md:ml-12 lg:mt-2 lg:ml-0 ">
                        <Image src="/audiophile.png" alt="logo"  width={90} height={10} loading="lazy"  className="" />
                    </div>
                </div>
              
              <div className="">
                <Link href="/cart"><Image src="/cart1.png" alt="cart-logo"  width={20} height={20} loading="lazy" className="" /></Link>
              </div>
            </div>
              
              <div className={`text-xs ml-10 md:ml-24  lg:flex justify-around items-center lg:mt-3 lg:ml-2 ${showHamburger ? 'block' : 'hidden'}`}>
                    <div className="lg:flex justify-around items-center lg:mt-[-45px] md:ml-10 lg:ml-20">
                        <div className=" mt-3 md:mt-4 lg:mt-0 lg:mr-4 xl:mr-12">
                            <Link href="/" className={`${router.pathname === '/' ? 'text-deep-brown' : ''
                        }`} >HOME</Link>
                        </div>
                        <div className="lg:mr-4  xl:mr-12">
                            <Link href="/headphones" className={`${router.pathname === '/headphones' ? 'text-deep-brown' : ''
                        }`} >HEADPHONES</Link>
                        </div>
                        <div className="hover:text-deep-brown  lg:mr-4  xl:mr-12">
                            <Link href="/speakers">SPEAKERS</Link>
                        </div>
                        <div className="hover:text-deep-brown  lg:mr-4  xl:mr-12">
                            <Link href="/earphones">EARPHONES</Link>
                        </div>
                    </div>
                      
                    {/* <div className="flex justify-center items-center md:mt-[-8px] mr-2 xl:mr-12 pr-20">
                        <Image src="/cart1.png" alt="cart-logo"  width={20} height={20} loading="lazy" className=" mr-0" />
                    </div> */}
              </div><hr className="block text-white mt-5 mx-[35px] border-1 md:mx-[150px] lg:mx-[230px] xl:mx-[290px]"/>
          </nav>
          {/* <Outlet/> */}
      </>
    );
  }
  
  export default NavBar;
  