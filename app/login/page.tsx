import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


const page = () => {
  return (
    <div>
        <div className='w-[1305px] mt-[100px] gap-[129px] mb-[100px]'>
            <div className='flex mobile:flex-col'>
                {/* img div */}
                <div className="w-[805px] h-[781px] bg-[#CBE4E8] mobile:w-[400px] mobile:h-[400px]">
                  <Image src={"/images/beatsnoop.svg"}alt="snoop"width={805}height={781}/>

                </div>
                {/* text div */}
                <div className='flex flex-col w-[371px] h-[530px] gap-[48px] ml-[200px] mobile:ml-[5px]'>
                  <h1 className='text-[36px] font-medium'>Log in to Exclusive</h1>
                  <h2>Enter your details below</h2>
                  
                  <h4 className='border-b-[1px] border-b-[#000000]'><input type="text" placeholder="Email Or PhoneNumber"></input></h4>
                  <h5 className='border-b-[1px] border-b-[#000000]'><input type="text" placeholder="Password"></input></h5>

                  <h6 className='flex gap-[30px]'>
                  <Button variant={"apnaStyle"} className='text-[#FFFFFF] bg-[#DB4444] w-[143px] h-[46px]'>Login</Button>

                  <Button variant={"apnaStyle"} className='text-[#DB4444]'>Forget Password?</Button></h6>
                  

                </div>
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
      
    
    
    
    
    
    

      
    </div>
  )
}

export default page
