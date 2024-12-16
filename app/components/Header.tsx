"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import {AiOutlineMenu ,AiOutlineClose} from "react-icons/ai"
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen ,setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>

      {/* lg work */}
    {/* top header */}
    <div className='flex justify-center items-center w-[1440px] bg-[#000000] mobile:hidden'>
      <div className='flex w-[859px] gap-[231px] mt-[12px] ml-[445px] text-[#FAFAFA]'>
        <div className='flex w-[550px] h-[24px] gap-[8px]'>
        <h1 className='w-[474px] h-[18px] font-[Poppins] font-medium'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
        <h2 className='w-[68px] h-[24px] font-semibold underline'>ShopNow</h2></div>

        <div className='flex w-[78px] h-[24px] gap-[5px]'>
          <h1 className='font-[Poppins] font-medium'>English</h1>
          <Image
          src={"/images/DropDown.svg"}
          alt="drop"
          width={24}
          height={24}/>
        </div>

      </div>
    </div>

    {/* nav */}
   <div className='flex w-[1170px] ml-[135px] mt-[44px] gap-[148px] mb-3 mobile:hidden'>
      <div className='flex w-[675px] gap-[190px]'>
        <h1 className='text-[24px] font-bold text-[#000000]'>Exclusive</h1>
        
       
          <nav className='mobile:hidden'>
          <ul className='flex w-[367px] h-[24px] gap-[48px]'>

            <li className='w-[48px] h-[24px] underline'>
              <Link href='./home' className='hover:text-[#DB4444]'>Home</Link></li>

            <li className='w-[66px] h-[24px]'>
            <Link href='./contact' className="hover:text-[#DB4444]">Contact</Link></li>

            <li className='w-[48px] h-[24px]'>
            <Link href='./about' className='hover:text-[#DB4444]'>About</Link></li>

            <li className='w-[61px] h-[24px]'>
            <Link href='./sign-up' className='hover:text-[#DB4444]'>Sign Up</Link></li>
          </ul>
        </nav>
        </div>

        <div className='flex w-[347px] h-[38px] gap-[24px] mobile:hidden'>
        <div className='w-[243px] h-[38px] r-[4px] gap-[10px] pt-[7px] pb-[7px] pr-[12px] pl-[20px] bg-[#F5F5F5]'>
          <div className='flex w-[211px] h-[24px] gap-[34px]'><h1 className='text-[12px]'><input type="text" placeholder="What are you looking for?"></input></h1>
          <Image
          src={"/images/Component 2.svg"}
          alt="component"
          width={24}
          height={24}/>
          </div>
        </div>

       <div className='flex w-[80px] h-[32px] gap-[16px]'>
          <Link href="./wishlist"><Image
          src={"/images/Wishlist.svg"}
          alt="wishlist"
          width={32}
          height={32} className='hover:bg-[#DB4444]'/></Link>
          <Link href="./cart"><Image
          src={"/images/Cart1.svg"}
          alt="cart"
          width={32}
          height={32} className='hover:bg-[#DB4444]'/></Link>
        </div>
      </div>
      
      </div>
    <div className='w-[1440px] border-[0.5px] border-[#000000] mobile:hidden'></div>




   {/* mobile work */}

   <div className='flex justify-evenly w-[390px] lg:hidden mt-[20px]'>

   <div className="flex mt-3"
                  onClick={toggleMenu}>
                    {isMenuOpen ?<AiOutlineClose size={30}/>:
                    <AiOutlineMenu size={30}/>
                  }
                </div>

            {
            isMenuOpen && (
            <ul className='flex flex-col gap-[4px]'>
                <li>
                    <Link href="./home" onClick={toggleMenu}>Home</Link>
                </li>

                <li>
                    <Link href="./contact" onClick={toggleMenu}>Contact</Link>
                </li>

                <li>
                    <Link href="./about" onClick={toggleMenu}>About</Link>
                </li>

                <li>
                    <Link href="./sign-up" onClick={toggleMenu}>SignUp</Link>
                </li>

                    </ul>
                  )
                }

                <h1 className='text-[24px] font-bold text-[#000000]'>Exclusive</h1>

                <div className='flex w-[80px] h-[32px] gap-[16px]'>
          <Link href="./wishlist"><Image
          src={"/images/Wishlist.svg"}
          alt="wishlist"
          width={32}
          height={32} className='hover:to-blue-500'/></Link>
          <Link href="./cart"><Image
          src={"/images/Cart1.svg"}
          alt="cart"
          width={32}
          height={32}/></Link>
        </div>


   </div>
   <div className='w-[390px] border-[0.5px] border-[#000000] lg:hidden'></div>

















































































    
    </div>
  
    
    
  )
};

export default Header
