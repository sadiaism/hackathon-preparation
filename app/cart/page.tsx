import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div>
    <div className='ml-[135px] mt-[100px] mobile:ml-[30px]'>Home / Cart</div>

{/* 1st */}
    <div className='flex flex-col ml-[135px] mt-[50px] w-[1170px] mb-[100px] mobile:ml-[30px]'>

        <div className='flex gap-[284px] mobile:gap-[39px]'>
            <h1>Product</h1>
            <h2>Price</h2>
            <h3>Quantity</h3>
            <h4>Subtotal</h4>
        </div>
{/* 2nd */}
        <div className='flex mt-[50px]'>
            <h1 className='flex mobile:flex-col'><Image src={"/images/gamingMonitor.svg"}alt="star"width={50}height={39}/>LCD Monitor</h1>
            <h2 className='ml-[200px] mobile:ml-[5px]'>$650</h2>
            <div className='flex justify-center items-center ml-[280px] border-[1px] border-[#000000] w-[72px] h-[44px] rounded-lg mobile:ml-[30px]'><h1>01</h1><h2 className='flex flex-col'><Image src={"/images/upArrow.svg"}alt="star"width={16}height={16}/><Image src={"/images/dropDownblack.svg"}alt="star"width={16}height={16}/></h2></div>
            <h4 className='ml-[280px] mobile:ml-[40px]'>$650</h4>
        </div>

{/* 3rd */}
        <div className='flex mt-[50px]'>
            <h1 className='flex mobile:flex-col'><Image src={"/images/jeep.svg"}alt="star"width={50}height={39}/>H1 Gamepad</h1>
            <h2 className='ml-[200px] mobile:ml-[5px]'>$550</h2>
            <div className='flex justify-center items-center ml-[280px] border-[1px] border-[#000000] w-[72px] h-[44px] rounded-lg mobile:ml-[30px]'><h1>02</h1><h2 className='flex flex-col'><Image src={"/images/upArrow.svg"}alt="star"width={16}height={16}/><Image src={"/images/dropDownblack.svg"}alt="star"width={16}height={16}/></h2></div>
            <h4 className='ml-[280px] mobile:ml-[40px]'>$1100</h4>
        </div>

{/* 4th */}
          <div className='flex justify-between mt-[50px] mobile:flex-col'>
            <div className='w-[218px] h-[56px] border-[1px] border-[#000000] pt-[16px] pl-[48px]'>Return To Shop</div>
            <div className='w-[218px] h-[56px] border-[1px] border-[#000000] pt-[16px] pl-[48px]'>Update Cart</div>

          </div>

{/* 5th */}
          <div className='flex justify-between mt-[50px] mobile:flex-col mobile:gap-[12px]'>
            <div className='flex gap-[12px] w-[527px] h-[56px] mobile:w-[300px]'>
                <div className='border-[1px] border-[#000000] w-[300px] h-[56px]
                pt-[12px] pl-[12px]'>Coupon Code</div>
                <div className='border-[1px] border-[#000000] w-[211px] h-[56px]
                pt-[12px] pl-[12px] bg-[#DB4444] text-[#FFFFFF]'>Apply Coupon</div>
                <div></div>
                
            </div>

            <div className='flex flex-col w-[470px] h-[324px] gap-[12px] border-[1px] border-[#000000] pl-[24px] pt-[24px] rounded-lg mobile:w-[300px]'>
                <h1 className='text-[20px] font-semibold'>Cart Total</h1>
                <div className='flex justify-between w-[422px] h-[24px] mobile:w-[250px] '><h1>Subtotal:</h1><h2>$1750</h2></div>
                <h3 className='w-[422px] border-[1px] border-[#000000] mobile:w-[250px]'></h3>
                <div className='flex justify-between w-[422px] h-[24px] mobile:w-[250px] '><h1>Shipping:</h1><h2>Free</h2></div>
                <h3 className='w-[422px] border-[1px] border-[#000000] mobile:w-[250px]'></h3>
                <div className='flex justify-between w-[422px] h-[24px] mobile:w-[250px] '><h1>Total:</h1><h2>$1750</h2></div>
                <Button variant={"apnaStyle"} className='w-[260px] h-[56px] mt-[50px] ml-[48px] bg-[#DB4444] text-[#FFFFFF] mobile:ml-[2px]'>Process To Checkout</Button>
            </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>

        































    </div>
    </div>
  )
}

export default page
