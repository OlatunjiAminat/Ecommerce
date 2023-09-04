
"use client"
import React, { useState } from "react";
import audiophile from "assets/audiophile.png";
import Image from "next/image";
// import cart from "assets/cart.png";
import { Outlet } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function NavBar(){ 
    const [showHamburger, setShowHamburger] = useState(false);
  
    const toggleHamburger = () => {
      setShowHamburger(!showHamburger);
    };
    return (
        <>
            <nav className="md:shadow-md">
                <button  onClick={toggleHamburger} className="md:hidden">
                    <FontAwesomeIcon icon={faBars} className="ml-8 pt-6 text-deep-orange-rgba"/>
                </button>
                <div className={`text-sm ml-16 mr-2 md:flex justify-between pt-3 items-center md:ml-2 ${showHamburger ? 'block' : 'hidden'}`}>
                    <div className="w-32 text-deep-orange-rgba hidden md:block  md:ml-0">
                        <Image src="/audiophile.png" alt="logo" width={25} height={25}  layout="responsive" loading="lazy" className="bg-brown md:ml-0" />
                    </div>
                    <div className="md:flex justify-around items-center">
                        <div className="text-deep-orange-rgba mt-3 mb-1 mr-2 md:mt-0 lg:mr-4 xl:mr-12 ">
                            <Link href="/">Home</Link>
                        </div>
                        <div className="text-deep-orange-rgba mb-1 mr-2 lg:mr-4  xl:mr-12">
                            <Link href="">Courses</Link>
                        </div>
                        <div className="text-deep-orange-rgba mb-1 mr-2 lg:mr-4  xl:mr-12">
                            <Link href="">Blogs</Link>
                        </div>
                        <div className="text-deep-orange-rgba mb-1 mr-2 lg:mr-4  xl:mr-12">
                            <Link href="">About Us</Link>
                        </div>
                        <div className="text-deep-orange-rgba mb-1 mr-2 lg:mr-4  xl:mr-12">
                            <Link href="">Contact Us</Link>
                        </div>
                        
                        <div className="flex justify-center items-center md:mt-[-14px] w-20 mr-2 xl:mr-12">
                            <Image src= "/cart.png" alt="cart-logo" width={30} height={30} layout="responsive" loading="lazy" className="w-10 mr-0" />
                        </div>
                        <div className="flex justify-evenly lg:mr-4  xl:mr-12">
                            <div>
                                <Link href=""><button className="bg-deep-orange-rgba my-4  mr-8 py-1 px-2 rounded-full text-white">
                                Be a contributor
                                </button></Link>
                            </div>
                            <div className="">
                                <Link href=""><button className="bg-deep-orange-rgba my-4 mr-2 py-1 px-1 w-24 rounded-full text-white">
                                Log in
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        {/* <Outlet/> */}
        </>
    );
  }
  
  export default NavBar;
  