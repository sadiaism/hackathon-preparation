"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const page = () => {
  return (<div>
    
    <div className='flex flex-col mt-[100px] ml-[135px] gap-[12px] mobile:ml-12'>
        <h1>Home / Contact</h1>


        <div className='flex mobile:flex-col'>
            {/* 1st */}
            <div className='w-[340px] h-[457px] bg-[#FFFFFF] gap-[32px] mt-[100px]'>
                <div className='flex flex-col gap-[24px]'>
                    <h1 className='flex gap-[16px]'><div><Image src={"/images/icons-phone.svg"} alt="phone"width={40}height={40}/></div>Call To Us</h1>

                    <h2>We are available 24/7, 7 days a week.</h2>
                    <h3>Phone: +8801611112222</h3>
                </div>

                

                <div className='flex flex-col w-[250px] h-[180px] gap-[24px] mt-[44px]'>
                    <h1 className='flex gap-[16px]'><Image src={"/images/icons-mail.svg"} alt="phone"width={40}height={40}/>Write To Us</h1>
                    <h2>Fill out our form and we will contact you within 24 hours.</h2>
                    <h3>Emails: customer@exclusive.com</h3>
                    <h4>Emails: support@exclusive.com</h4>
                </div>
            
            
            
            
            
            
            </div>
            {/* 2nd */}
            <div className='w-[800px] h-[457px] mt-[100px]'>
                <div className='flex flex-col'>
             {/* 1st three box div */}
              <div className='flex gap-[16px] mobile:flex-col'>
                <div className='w-[235px] h-[50px] bg-[#F5F5F5] pl-3 pt-3'><input type="text" placeholder="Your Name"></input></div>
                <div className='w-[235px] h-[50px] bg-[#F5F5F5] pl-3 pt-3'><input type="text" placeholder="Your Email"></input></div>
                <div className='w-[235px] h-[50px] bg-[#F5F5F5] pl-3 pt-3'><input type="text" placeholder="Your Phone"></input></div>
              </div>


             {/* 2nd div */}
            <div className='w-[737px] h-[207px] bg-[#F5F5F5] gap-[16px] mt-[32px] pt-3 pl-3 mobile:w-[300px] mobile:h-[100px]'><input type="text" placeholder="Your Message"></input></div>

                </div>
                <Button variant={'apnaStyle'} className='mt-[12px] bg-[#DB4444] ml-[610px] text-[#FFFFFF] mobile:ml-[50px]'>Send Message</Button>
            </div>


         












        </div>
</div>

</div>

  )
}

export default page
