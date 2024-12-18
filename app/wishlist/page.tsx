import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    
        <div className='w-[1170px] mt-[100px] ml-[135px] gap-[80px] mb-[100px] mobile:ml-[50px] '>
{/* 1st div */}
            <div className='flex justify-between mobile:flex-col mobile:gap-[12px]'>
                <h1>Wishlist (4)</h1>
                <h2 className='w-[223px] h-[56px] border-[1px] border-[#000000] pt-[16px] pb-[16px] rounded-lg pl-16'>Move All To Bag</h2>
            </div>


{/* 2nd div */}
            <div className='flex gap-[30px] mt-[50px] mobile:flex-col'>
                {/* 1st col */}
                <div className='flex flex-col w-[270px] h-[322px] gap-[16px]'>
                    {/* img */}
                    <div className="w-[270px] h-[250px] r-[4px] bg-[#F5F5F5] bg-[url('/images/purs.svg')] bg-center bg-no-repeat">
                    <div className='flex justify-between pt-[12px] pl-[12px] pr-[12px]'><h1 className='text-[#FFFFFF] bg-[#DB4444] w-[55px] h-[26px] text-center'>-35%</h1><h2><Image src={"/images/delete box.svg"}alt="apple"width={34}height={34}/></h2></div><div className='bg-black mt-[162px] h-[41px] text-[#FFFFFF]'><div className='flex ml-[84px] pt-[10px] gap-[10px]'><Image src={"/images/Cart white.svg"}alt="apple"width={24}height={24}/><h1 className='text-[12px]'>Add to Cart</h1></div></div></div>

                    {/* text div */}
                    <div>
                        <h1 className='font-semibold'>Gucci duffle bag</h1>
                        <div className='flex gap-[12px]'><h1 className='text-[#DB4444]'>$960</h1><h2>$1120</h2></div>
                        
                    </div>

                </div>
                {/* 1st end */}

                {/* 2nd col */}
                <div className='flex flex-col w-[270px] h-[322px] gap-[16px]'>
                    {/* img */}
                    <div className="w-[270px] h-[250px] r-[4px] bg-[#F5F5F5] bg-[url('/images/Vcr.svg')] bg-center bg-no-repeat">
                    <div className='flex justify-end pt-[12px] pl-[12px] pr-[12px]'><h2><Image src={"/images/delete box.svg"}alt="apple"width={34}height={34}/></h2></div><div className='bg-black mt-[162px] h-[41px] text-[#FFFFFF]'><div className='flex ml-[84px] pt-[10px] gap-[10px]'><Image src={"/images/Cart white.svg"}alt="apple"width={24}height={24}/><h1 className='text-[12px]'>Add to Cart</h1></div></div></div>

                    {/* text div */}
                    <div>
                        <h1 className='font-semibold'>RGB liquid CPU Cooler</h1>
                        <div><h1 className='text-[#DB4444]'>$1960</h1></div>
                        
                    </div>

                </div>
                {/* 2nd end */}

                {/* 3rd col */}
                <div className='flex flex-col w-[270px] h-[322px] gap-[16px]'>
                    {/* img */}
                    <div className="w-[270px] h-[250px] r-[4px] bg-[#F5F5F5] bg-[url('/images/shooter2.svg')] bg-center bg-no-repeat">
                    <div className='flex justify-end pt-[12px] pl-[12px] pr-[12px]'><h2><Image src={"/images/delete box.svg"}alt="apple"width={34}height={34}/></h2></div><div className='bg-black mt-[162px] h-[41px] text-[#FFFFFF]'><div className='flex ml-[84px] pt-[10px] gap-[10px]'><Image src={"/images/Cart white.svg"}alt="apple"width={24}height={24}/><h1 className='text-[12px]'>Add to Cart</h1></div></div></div>

                    {/* text div */}
                    <div>
                        <h1 className='font-semibold'>GP11 Shooter USB Gamepad</h1>
                        <div><h1 className='text-[#DB4444]'>$550</h1></div>
                        
                    </div>

                </div>
                {/* 3rd end */}

                {/* 4th col */}
                <div className='flex flex-col w-[270px] h-[322px] gap-[16px]'>
                    {/* img */}
                    <div className="w-[270px] h-[250px] r-[4px] bg-[#F5F5F5] bg-[url('/images/jacket.svg')] bg-center bg-no-repeat">
                    <div className='flex justify-end pt-[12px] pl-[12px] pr-[12px]'><h2><Image src={"/images/delete box.svg"}alt="apple"width={34}height={34}/></h2></div><div className='bg-black mt-[162px] h-[41px] text-[#FFFFFF]'><div className='flex ml-[84px] pt-[10px] gap-[10px]'><Image src={"/images/Cart white.svg"}alt="apple"width={24}height={24}/><h1 className='text-[12px]'>Add to Cart</h1></div></div></div>

                    {/* text div */}
                    <div>
                        <h1 className='font-semibold'>Quilted Satin Jacket</h1>
                        <div><h1 className='text-[#DB4444]'>$750</h1></div>
                        
                    </div>

                </div>
                {/* 4th end */}
                </div>









{/* 3rd div */}
                <div className='flex justify-between mt-[100px] mobile:flex-col mobile:gap-[12px]'>
                    <div className="flex text-[#DB4444] gap-[12px]"><Image src={"/images/Rectangle 18.svg"}alt="Rectangle"width={20}height={40}/>Just For You</div>
                    <div className='border-[#000000] border-[1px] w-[150px] h-[56px] pl-[44px] pt-[12px] rounded-lg'>See All</div>
                </div>



                <div className='flex gap-[30px] mt-[50px] mobile:flex-col'>
                {/* 1st col */}
                <div className='flex flex-col w-[270px] h-[322px] gap-[16px]'>
                    {/* img */}
                    <div className="w-[270px] h-[250px] r-[4px] bg-[#F5F5F5] bg-[url('/images/laptop.svg')] bg-center bg-no-repeat">
                    <div className='flex justify-between pt-[12px] pl-[12px] pr-[12px]'><h1 className='text-[#FFFFFF] bg-[#DB4444] w-[55px] h-[26px] text-center'>-35%</h1><h2><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></h2></div><div className='bg-black mt-[162px] h-[41px] text-[#FFFFFF]'><div className='flex ml-[84px] pt-[10px] gap-[10px]'><Image src={"/images/Cart white.svg"}alt="apple"width={24}height={24}/><h1 className='text-[12px]'>Add to Cart</h1></div></div></div>

                    {/* text div */}
                    <div>
                        <h1 className='font-semibold'></h1>ASUS FHD Gaming Laptop
                        <div className='flex gap-[12px]'><h1 className='text-[#DB4444]'>$960</h1><h2>$1160</h2></div>
                        <div className="flex gap-[8px]"><Image src={"/images/Five star.svg"}alt="star"width={100}height={20}/>(65)</div>
                        
                    </div>

                </div>
                {/* 1st end */}

                {/* 2nd col */}
                <div className='flex flex-col w-[270px] h-[322px] gap-[16px]'>
                    {/* img */}
                    <div className="w-[270px] h-[250px] r-[4px] bg-[#F5F5F5] bg-[url('/images/gamingMonitor.svg')] bg-center bg-no-repeat">
                    <div className='flex justify-end pt-[12px] pl-[12px] pr-[12px]'><h2><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></h2></div><div className='bg-black mt-[162px] h-[41px] text-[#FFFFFF]'><div className='flex ml-[84px] pt-[10px] gap-[10px]'><Image src={"/images/Cart white.svg"}alt="apple"width={24}height={24}/><h1 className='text-[12px]'>Add to Cart</h1></div></div></div>

                    {/* text div */}
                    <div>
                        <h1 className='font-semibold'></h1>IPS LCD Gaming Monitor
                        <h1 className='text-[#DB4444]'>$1160</h1>
                        <div className="flex gap-[8px]"><Image src={"/images/Five star.svg"}alt="star"width={100}height={20}/>(65)</div>
                        
                    </div>

                </div>
                {/* 2nd end */}

                {/* 3rd col */}
                <div className='flex flex-col w-[270px] h-[322px] gap-[16px]'>
                    {/* img */}
                    <div className="w-[270px] h-[250px] r-[4px] bg-[#F5F5F5] bg-[url('/images/jeep.svg')] bg-center bg-no-repeat">
                    <div className='flex justify-between pt-[12px] pl-[12px] pr-[12px]'><h1 className='text-[#FFFFFF] bg-[#00FF66] w-[55px] h-[26px] text-center'>New</h1><h2><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></h2></div><div className='bg-black mt-[162px] h-[41px] text-[#FFFFFF]'><div className='flex ml-[84px] pt-[10px] gap-[10px]'><Image src={"/images/Cart white.svg"}alt="apple"width={24}height={24}/><h1 className='text-[12px]'>Add to Cart</h1></div></div></div>

                    {/* text div */}
                    <div>
                        <h1 className='font-semibold'></h1>HAVIT HV-G92 Gamepad
                        <h1 className='text-[#DB4444]'>$560</h1>
                        <div className="flex gap-[8px]"><Image src={"/images/Five star.svg"}alt="star"width={100}height={20}/>(65)</div>
                        
                    </div>

                </div>
                {/* 3rd end */}

                {/* 4th col */}
                <div className='flex flex-col w-[270px] h-[322px] gap-[16px]'>
                    {/* img */}
                    <div className="w-[270px] h-[250px] r-[4px] bg-[#F5F5F5] bg-[url('/images/keyboard.svg')] bg-center bg-no-repeat">
                    <div className='flex justify-end pt-[12px] pl-[12px] pr-[12px]'><h2><Image src={"/images/Fill Eye.svg"}alt="eye"width={34}height={34}/></h2></div><div className='bg-black mt-[162px] h-[41px] text-[#FFFFFF]'><div className='flex ml-[84px] pt-[10px] gap-[10px]'><Image src={"/images/Cart white.svg"}alt="apple"width={24}height={24}/><h1 className='text-[12px]'>Add to Cart</h1></div></div></div>

                    {/* text div */}
                    <div>
                        <h1 className='font-semibold'></h1>AK-900 Wired Keyboard
                        <h1 className='text-[#DB4444]'>$200</h1>
                        <div className="flex gap-[8px]"><Image src={"/images/Five star.svg"}alt="star"width={100}height={20}/>(65)</div>
                        
                    </div>

                </div>
                {/* 4th end */}

    


                
                </div>







            




        




























































        </div>
      
    
  )
}

export default page
