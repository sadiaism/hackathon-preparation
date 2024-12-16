"use client"
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        

        <div className='flex flex-col mt-[100px] ml-[135px] gap-[12px] mobile:ml-[1px]'>
        <h1>Home / Contact</h1>

        <div className='flex mt-[100px] mobile:flex-col'>
            {/* text div */}
            <div className='flex flex-col mt-[200px] mobile:mt-[12px]'>
                <h1 className='flex text-[54px] font-semibold w-[525px] h-336px]'>Our Story</h1>
                <h2 className='w-[525px] h-[136px] mobile:w-[300px]'>Launced in 2015, Exclusive is South {`Asia’s`} premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </h2>
                <h3 className='w-[505px] h-[78px] mobile:w-[300px] mobile:mt-16'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</h3>
            </div>
            {/* image div */}
            <div className="w-[705px] h-[609px] bg-[#EB7EA8] mobile:mt-12 mobile:w-[400px] mobile:h-[300px] "><Image src={"/images/twoFemales.svg"}alt="services"width={705}height={609}/></div>
    </div>
    {/* 2nd */}

        <div className='grid grid-cols-4 mt-[100px] w-[1170px] mobile:grid-cols-1 mobile:ml-[50px]'>
            {/*1st col*/}
            <div className='flex flex-col w-[270px] h-[230px] border-[1px] border-[#000000] justify-center items-center'>
              <h1><Image src={"/images/Services4.svg"}alt="services"width={80}height={80}/></h1>
              <h2 className='text-[32px] font-bold'>10.5k</h2>
              <h3>Sallers active our site</h3>  
                </div>
            
            {/*2st col*/}
            <div className='flex flex-col w-[270px] h-[230px] border-[1px] border-[#000000] justify-center items-center bg-[#DB4444]'>
              <h1><Image src={"/images/Services5.svg"}alt="services"width={80}height={80}/></h1>
              <h2 className='text-[32px] font-bold'>33k</h2>
              <h3>Mopnthly Produduct Sale</h3>  
                </div>
                {/*3st col*/}
            <div className='flex flex-col w-[270px] h-[230px] border-[1px] border-[#000000] justify-center items-center'>
              <h1><Image src={"/images/Services6.svg"}alt="services"width={80}height={80}/></h1>
              <h2 className='text-[32px] font-bold'>45.5k</h2>
              <h3>Customer active in our site</h3>  
                </div>
                {/*4st col*/}
            <div className='flex flex-col w-[270px] h-[230px] border-[1px] border-[#000000] justify-center items-center'>
              <h1><Image src={"/images/Services7.svg"}alt="services"width={80}height={80}/></h1>
              <h2 className='text-[32px] font-bold'>25k</h2>
              <h3>Anual gross sale in our site</h3>  
                </div>
                {/* col end */}
                </div>
        
        


{/* 3rd */}
            <div className='grid grid-cols-3 w-[1170px] gap-[30px] mt-[100px] mobile:grid-cols-1'>
                {/* 1st col */}
                <div className='flex flex-col w-[370px] gap-[32px]'>
                    {/* img */}
                    <div className="w-[370px] h-[430px] bg-[#F5F5F5] "><Image className='ml-[50px] mt-[39px]' src={"/images/imageMen.svg"}alt="icon"width={236}height={391}/></div>
                    {/* text */}
                    <div className='w-[185px] h-[102px] gap-[16px]'>
                        <h1 className='font-semibold text-[32px]'>Tom Cruise</h1>
                        <h2>Founder & Chairman</h2>
                        <h3 className='flex gap-[16px]'><Image src={"/images/Icon-Twitter-b.svg"}alt="icon"width={24}height={24}/><Image src={"/images/icon-instagram-b.svg"}alt="services"width={24}height={24}/><Image src={"/images/Icon-Linkedin-b.svg"}alt="services"width={24}height={24}/></h3>

                    </div>

                </div>
                {/* end */}
                {/* 2st col */}
                <div className='flex flex-col w-[370px] gap-[32px]'>
                    {/* img */}
                    <div className='w-[370px] h-[430px] bg-[#F5F5F5]'><Image className='ml-[50px] mt-[33px]' src={"/images/imageGirl.svg"}alt="icon"width={294}height={397}/></div>
                    {/* text */}
                    <div className='h-[102px] gap-[16px]'>
                        <h1 className='font-semibold text-[32px]'>Emma Watson</h1>
                        <h2>Managing Director</h2>
                        <h3 className='flex gap-[16px]'><Image src={"/images/Icon-Twitter-b.svg"}alt="icon"width={24}height={24}/><Image src={"/images/icon-instagram-b.svg"}alt="services"width={24}height={24}/><Image src={"/images/Icon-Linkedin-b.svg"}alt="services"width={24}height={24}/></h3>

                    </div>

                </div>
                {/* end */}
                {/* 3st col */}
                <div className='flex flex-col w-[370px] gap-[32px]'>
                    {/* img */}
                    <div className='w-[370px] h-[430px] bg-[#F5F5F5]'><Image className='ml-[22px] mt-[38px]' src={"/images/coatMen.svg"}alt="icon"width={326}height={392}/></div>
                    {/* text */}
                    <div className='w-[185px] h-[102px] gap-[16px]'>
                        <h1 className='font-semibold text-[32px]'>Will Smith</h1>
                        <h2>Product Designer</h2>
                        <h3 className='flex gap-[16px]'><Image src={"/images/Icon-Twitter-b.svg"}alt="icon"width={24}height={24}/><Image src={"/images/icon-instagram-b.svg"}alt="services"width={24}height={24}/><Image src={"/images/Icon-Linkedin-b.svg"}alt="services"width={24}height={24}/></h3>

                    </div>

                </div>
                {/* end */}
           </div>


           <div className='ml-[500px]'><Image src={"/images/center-red.svg"}alt="services"width={112}height={16}/></div>









           {/* section8 */}
        <div className="flex w-[943px] mt-[100px] ml-[249px] gap-[88px] mb-[100px]
        mobile:flex-col mobile:ml-[50px]">
          <div className="flex flex-col gap-[24px]"><h1 className='pl-[36px]'><Image src={"/images/Services1.svg"}alt="service"width={80}height={80}/></h1><h2>FREE AND FAST DELIVERY</h2><h3>Free delivery for all orders over $140</h3></div>

          <div className="flex flex-col gap-[24px]"><h1 className='pl-[36px]'><Image src={"/images/Services2.svg"}alt="service"width={80}height={80}/></h1><h2>24/7 CUSTOMER SERVICE</h2><h3>Friendly 24/7 customer support</h3></div>

          <div className="flex flex-col gap-[24px]"><h1 className='pl-[36px]'><Image src={"/images/Services3.svg"}alt="service"width={80}height={80}/></h1><h2>MONEY BACK GUARANTEE</h2><h3>We reurn money within 30 days</h3></div>
          
        </div>
           
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     </div>
    
    </div>
  )
}

export default page
